import React from 'react';
const LABEL_36482 = 'component_36482';
export function Component36482({ value = 36482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36482, 'data-value': derived.doubled }, children);
}
export default Component36482;
