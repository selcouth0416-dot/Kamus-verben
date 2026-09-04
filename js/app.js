let currentLevel = 'ALL';
let searchQuery = '';

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.9;
  
  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Google') || v.name.includes('Natural')));
  if (deVoice) utterance.voice = deVoice;

  window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

function setFilter(level) {
  currentLevel = level;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.level === level) {
      btn.className = 'filter-btn px-3 py-1 rounded-md font-medium bg-slate-900 text-white transition';
    } else {
      btn.className = 'filter-btn px-3 py-1 rounded-md font-medium bg-slate-200 text-slate-700 hover:bg-slate-300 transition';
    }
  });
  render();
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  render();
});

function getLevelBadgeColor(level) {
  switch(level) {
    case 'A1': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'A2': return 'bg-teal-100 text-teal-800 border-teal-200';
    case 'B1': return 'bg-sky-100 text-sky-800 border-sky-200';
    case 'B2': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'C1': return 'bg-violet-100 text-violet-800 border-violet-200';
    case 'C2': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-slate-100 text-slate-800 border-slate-200';
  }
}

function render() {
  const grid = document.getElementById('verbenGrid');
  const empty = document.getElementById('emptyState');
  const counter = document.getElementById('counterText');

  const filtered = verbenData.filter(v => {
    const matchesLevel = (currentLevel === 'ALL') || (v.level === currentLevel);
    const matchesSearch = !searchQuery || 
      v.infinitiv.toLowerCase().includes(searchQuery) ||
      v.arti.toLowerCase().includes(searchQuery);
    return matchesLevel && matchesSearch;
  });

  counter.textContent = `${filtered.length} Kata Kerja Ditemukan`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  grid.innerHTML = filtered.map(v => {
    const prepHtml = v.praepositionen 
      ? v.praepositionen.map(p => `<span class="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded text-[11px] font-medium border border-indigo-100">+ ${p.präposition} (${p.kasus})</span>`).join(' ')
      : '';

    const sentencesHtml = v.contoh_kalimat.map(s => `
      <div class="bg-slate-50 p-2 rounded border border-slate-100 text-xs">
        <div class="flex items-start justify-between gap-2">
          <span class="font-medium text-slate-800">"${s.de}"</span>
          <button onclick="speak('${s.de.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-slate-700 p-0.5" title="Dengarkan">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          </button>
        </div>
        <p class="text-slate-500 mt-0.5 text-[11px]">${s.id}</p>
      </div>
    `).join('');

    return `
      <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow transition flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-bold text-slate-900">${v.infinitiv}</h3>
                <button onclick="speak('${v.infinitiv}')" class="text-slate-400 hover:text-slate-700 transition" title="Dengarkan">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                </button>
                <span class="text-xs px-2 py-0.5 rounded border font-semibold ${getLevelBadgeColor(v.level)}">${v.level}</span>
              </div>
              <p class="text-xs text-slate-600 mt-0.5 font-medium">${v.arti}</p>
            </div>
            <div class="text-right text-[11px] text-slate-400">
              <span class="block">${v.regelmaessig ? 'Regelmäßig' : 'Unregelmäßig'}</span>
              <span class="font-mono text-slate-500 font-semibold">${v.hilfsverb}</span>
            </div>
          </div>

          ${prepHtml ? `<div class="mt-2 flex flex-wrap gap-1">${prepHtml}</div>` : ''}

          <div class="mt-3 grid grid-cols-3 gap-2 text-center text-xs bg-slate-50 py-2 px-1 rounded-lg border border-slate-100">
            <div>
              <span class="block text-[10px] text-slate-400 uppercase font-semibold">Präsens (er/sie)</span>
              <span class="font-medium text-slate-800">${v.konjugasi.praesens.er_sie_es}</span>
            </div>
            <div>
              <span class="block text-[10px] text-slate-400 uppercase font-semibold">Präteritum</span>
              <span class="font-medium text-slate-800">${v.konjugasi.praeteritum.er_sie_es}</span>
            </div>
            <div>
              <span class="block text-[10px] text-slate-400 uppercase font-semibold">Perfekt</span>
              <span class="font-medium text-slate-800">${v.konjugasi.perfekt}</span>
            </div>
          </div>

          <div class="mt-3 space-y-1.5">
            <span class="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Contoh Kalimat</span>
            ${sentencesHtml}
          </div>
        </div>

        <div class="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-400 flex justify-between items-center">
          <span>Imperativ: <span class="text-slate-600 font-medium">${v.konjugasi.imperativ}</span></span>
        </div>
      </div>
    `;
  }).join('');
}

render();
