import React from 'react';
const LABEL_17975 = 'component_17975';
export function Component17975({ value = 17975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17975, 'data-value': derived.doubled }, children);
}
export default Component17975;
