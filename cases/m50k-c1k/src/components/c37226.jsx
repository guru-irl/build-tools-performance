import React from 'react';
const LABEL_37226 = 'component_37226';
export function Component37226({ value = 37226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37226, 'data-value': derived.doubled }, children);
}
export default Component37226;
