import React from 'react';
const LABEL_26351 = 'component_26351';
export function Component26351({ value = 26351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26351, 'data-value': derived.doubled }, children);
}
export default Component26351;
