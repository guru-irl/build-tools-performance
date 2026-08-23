import React from 'react';
const LABEL_28989 = 'component_28989';
export function Component28989({ value = 28989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28989, 'data-value': derived.doubled }, children);
}
export default Component28989;
