import React from 'react';
const LABEL_6874 = 'component_6874';
export function Component6874({ value = 6874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6874, 'data-value': derived.doubled }, children);
}
export default Component6874;
