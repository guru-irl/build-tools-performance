import React from 'react';
const LABEL_24908 = 'component_24908';
export function Component24908({ value = 24908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24908, 'data-value': derived.doubled }, children);
}
export default Component24908;
