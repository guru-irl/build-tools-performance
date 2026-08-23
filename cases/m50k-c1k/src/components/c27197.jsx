import React from 'react';
const LABEL_27197 = 'component_27197';
export function Component27197({ value = 27197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27197, 'data-value': derived.doubled }, children);
}
export default Component27197;
