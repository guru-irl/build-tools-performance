import React from 'react';
const LABEL_27928 = 'component_27928';
export function Component27928({ value = 27928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27928, 'data-value': derived.doubled }, children);
}
export default Component27928;
