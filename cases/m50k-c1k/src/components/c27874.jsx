import React from 'react';
const LABEL_27874 = 'component_27874';
export function Component27874({ value = 27874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27874, 'data-value': derived.doubled }, children);
}
export default Component27874;
