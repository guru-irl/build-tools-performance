import React from 'react';
const LABEL_7933 = 'component_7933';
export function Component7933({ value = 7933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7933, 'data-value': derived.doubled }, children);
}
export default Component7933;
