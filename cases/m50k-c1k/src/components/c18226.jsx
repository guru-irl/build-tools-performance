import React from 'react';
const LABEL_18226 = 'component_18226';
export function Component18226({ value = 18226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18226, 'data-value': derived.doubled }, children);
}
export default Component18226;
