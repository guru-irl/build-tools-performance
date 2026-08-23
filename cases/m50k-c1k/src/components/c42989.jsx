import React from 'react';
const LABEL_42989 = 'component_42989';
export function Component42989({ value = 42989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42989, 'data-value': derived.doubled }, children);
}
export default Component42989;
