import React from 'react';
const LABEL_20064 = 'component_20064';
export function Component20064({ value = 20064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20064, 'data-value': derived.doubled }, children);
}
export default Component20064;
