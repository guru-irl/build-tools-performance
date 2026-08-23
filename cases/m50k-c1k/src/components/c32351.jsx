import React from 'react';
const LABEL_32351 = 'component_32351';
export function Component32351({ value = 32351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32351, 'data-value': derived.doubled }, children);
}
export default Component32351;
