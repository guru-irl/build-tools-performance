import React from 'react';
const LABEL_35883 = 'component_35883';
export function Component35883({ value = 35883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35883, 'data-value': derived.doubled }, children);
}
export default Component35883;
