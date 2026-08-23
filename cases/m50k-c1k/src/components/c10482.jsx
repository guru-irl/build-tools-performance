import React from 'react';
const LABEL_10482 = 'component_10482';
export function Component10482({ value = 10482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10482, 'data-value': derived.doubled }, children);
}
export default Component10482;
