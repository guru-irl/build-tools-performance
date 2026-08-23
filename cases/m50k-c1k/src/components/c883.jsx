import React from 'react';
const LABEL_883 = 'component_883';
export function Component883({ value = 883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_883, 'data-value': derived.doubled }, children);
}
export default Component883;
