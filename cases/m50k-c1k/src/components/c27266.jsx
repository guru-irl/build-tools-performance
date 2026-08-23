import React from 'react';
const LABEL_27266 = 'component_27266';
export function Component27266({ value = 27266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27266, 'data-value': derived.doubled }, children);
}
export default Component27266;
