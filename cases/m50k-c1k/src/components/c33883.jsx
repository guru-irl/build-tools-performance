import React from 'react';
const LABEL_33883 = 'component_33883';
export function Component33883({ value = 33883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33883, 'data-value': derived.doubled }, children);
}
export default Component33883;
