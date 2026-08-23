import React from 'react';
const LABEL_20465 = 'component_20465';
export function Component20465({ value = 20465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20465, 'data-value': derived.doubled }, children);
}
export default Component20465;
