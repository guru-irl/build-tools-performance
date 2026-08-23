import React from 'react';
const LABEL_35482 = 'component_35482';
export function Component35482({ value = 35482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35482, 'data-value': derived.doubled }, children);
}
export default Component35482;
