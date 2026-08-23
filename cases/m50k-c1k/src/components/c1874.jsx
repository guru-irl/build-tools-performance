import React from 'react';
const LABEL_1874 = 'component_1874';
export function Component1874({ value = 1874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1874, 'data-value': derived.doubled }, children);
}
export default Component1874;
