import React from 'react';
const LABEL_17388 = 'component_17388';
export function Component17388({ value = 17388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17388, 'data-value': derived.doubled }, children);
}
export default Component17388;
