import React from 'react';
const LABEL_20975 = 'component_20975';
export function Component20975({ value = 20975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20975, 'data-value': derived.doubled }, children);
}
export default Component20975;
