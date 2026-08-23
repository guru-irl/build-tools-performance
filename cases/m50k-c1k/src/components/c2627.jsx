import React from 'react';
const LABEL_2627 = 'component_2627';
export function Component2627({ value = 2627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2627, 'data-value': derived.doubled }, children);
}
export default Component2627;
