import React from 'react';
const LABEL_24226 = 'component_24226';
export function Component24226({ value = 24226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24226, 'data-value': derived.doubled }, children);
}
export default Component24226;
