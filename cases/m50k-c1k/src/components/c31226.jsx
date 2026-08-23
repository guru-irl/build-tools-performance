import React from 'react';
const LABEL_31226 = 'component_31226';
export function Component31226({ value = 31226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31226, 'data-value': derived.doubled }, children);
}
export default Component31226;
