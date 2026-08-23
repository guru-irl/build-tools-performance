import React from 'react';
const LABEL_32226 = 'component_32226';
export function Component32226({ value = 32226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32226, 'data-value': derived.doubled }, children);
}
export default Component32226;
