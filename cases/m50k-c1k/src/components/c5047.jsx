import React from 'react';
const LABEL_5047 = 'component_5047';
export function Component5047({ value = 5047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5047, 'data-value': derived.doubled }, children);
}
export default Component5047;
