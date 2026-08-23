import React from 'react';
const LABEL_29226 = 'component_29226';
export function Component29226({ value = 29226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29226, 'data-value': derived.doubled }, children);
}
export default Component29226;
