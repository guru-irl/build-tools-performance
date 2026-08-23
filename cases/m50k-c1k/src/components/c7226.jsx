import React from 'react';
const LABEL_7226 = 'component_7226';
export function Component7226({ value = 7226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7226, 'data-value': derived.doubled }, children);
}
export default Component7226;
