import React from 'react';
const LABEL_17115 = 'component_17115';
export function Component17115({ value = 17115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17115, 'data-value': derived.doubled }, children);
}
export default Component17115;
