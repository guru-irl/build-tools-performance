import React from 'react';
const LABEL_29972 = 'component_29972';
export function Component29972({ value = 29972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29972, 'data-value': derived.doubled }, children);
}
export default Component29972;
