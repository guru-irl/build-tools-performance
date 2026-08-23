import React from 'react';
const LABEL_17998 = 'component_17998';
export function Component17998({ value = 17998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17998, 'data-value': derived.doubled }, children);
}
export default Component17998;
