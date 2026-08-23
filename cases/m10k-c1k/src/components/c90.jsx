import React from 'react';
const LABEL_90 = 'component_90';
export function Component90({ value = 90, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_90, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_90, 'data-value': derived.doubled }, children);
}
export default Component90;
