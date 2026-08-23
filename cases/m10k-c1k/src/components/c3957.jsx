import React from 'react';
const LABEL_3957 = 'component_3957';
export function Component3957({ value = 3957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3957, 'data-value': derived.doubled }, children);
}
export default Component3957;
