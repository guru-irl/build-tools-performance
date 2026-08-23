import React from 'react';
const LABEL_39874 = 'component_39874';
export function Component39874({ value = 39874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39874, 'data-value': derived.doubled }, children);
}
export default Component39874;
