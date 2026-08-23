import React from 'react';
const LABEL_39975 = 'component_39975';
export function Component39975({ value = 39975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39975, 'data-value': derived.doubled }, children);
}
export default Component39975;
