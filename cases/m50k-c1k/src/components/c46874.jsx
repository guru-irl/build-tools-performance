import React from 'react';
const LABEL_46874 = 'component_46874';
export function Component46874({ value = 46874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46874, 'data-value': derived.doubled }, children);
}
export default Component46874;
