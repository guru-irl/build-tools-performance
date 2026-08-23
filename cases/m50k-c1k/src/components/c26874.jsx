import React from 'react';
const LABEL_26874 = 'component_26874';
export function Component26874({ value = 26874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26874, 'data-value': derived.doubled }, children);
}
export default Component26874;
