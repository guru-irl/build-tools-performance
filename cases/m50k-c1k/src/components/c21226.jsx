import React from 'react';
const LABEL_21226 = 'component_21226';
export function Component21226({ value = 21226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21226, 'data-value': derived.doubled }, children);
}
export default Component21226;
