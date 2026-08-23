import React from 'react';
const LABEL_37933 = 'component_37933';
export function Component37933({ value = 37933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37933, 'data-value': derived.doubled }, children);
}
export default Component37933;
