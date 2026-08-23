import React from 'react';
const LABEL_2890 = 'component_2890';
export function Component2890({ value = 2890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2890, 'data-value': derived.doubled }, children);
}
export default Component2890;
