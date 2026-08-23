import React from 'react';
const LABEL_3005 = 'component_3005';
export function Component3005({ value = 3005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3005, 'data-value': derived.doubled }, children);
}
export default Component3005;
