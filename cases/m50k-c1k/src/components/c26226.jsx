import React from 'react';
const LABEL_26226 = 'component_26226';
export function Component26226({ value = 26226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26226, 'data-value': derived.doubled }, children);
}
export default Component26226;
