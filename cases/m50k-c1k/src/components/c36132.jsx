import React from 'react';
const LABEL_36132 = 'component_36132';
export function Component36132({ value = 36132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36132, 'data-value': derived.doubled }, children);
}
export default Component36132;
