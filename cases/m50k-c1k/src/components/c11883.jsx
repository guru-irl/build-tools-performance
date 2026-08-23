import React from 'react';
const LABEL_11883 = 'component_11883';
export function Component11883({ value = 11883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11883, 'data-value': derived.doubled }, children);
}
export default Component11883;
