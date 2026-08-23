import React from 'react';
const LABEL_27250 = 'component_27250';
export function Component27250({ value = 27250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27250, 'data-value': derived.doubled }, children);
}
export default Component27250;
