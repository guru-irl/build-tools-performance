import React from 'react';
const LABEL_5883 = 'component_5883';
export function Component5883({ value = 5883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5883, 'data-value': derived.doubled }, children);
}
export default Component5883;
