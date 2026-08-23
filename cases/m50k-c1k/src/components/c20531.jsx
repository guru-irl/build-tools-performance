import React from 'react';
const LABEL_20531 = 'component_20531';
export function Component20531({ value = 20531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20531, 'data-value': derived.doubled }, children);
}
export default Component20531;
