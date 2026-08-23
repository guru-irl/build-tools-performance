import React from 'react';
const LABEL_20290 = 'component_20290';
export function Component20290({ value = 20290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20290, 'data-value': derived.doubled }, children);
}
export default Component20290;
