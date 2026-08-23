import React from 'react';
const LABEL_27061 = 'component_27061';
export function Component27061({ value = 27061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27061, 'data-value': derived.doubled }, children);
}
export default Component27061;
