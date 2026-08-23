import React from 'react';
const LABEL_2776 = 'component_2776';
export function Component2776({ value = 2776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2776, 'data-value': derived.doubled }, children);
}
export default Component2776;
