import React from 'react';
const LABEL_17875 = 'component_17875';
export function Component17875({ value = 17875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17875, 'data-value': derived.doubled }, children);
}
export default Component17875;
