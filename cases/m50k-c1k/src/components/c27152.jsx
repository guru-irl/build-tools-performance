import React from 'react';
const LABEL_27152 = 'component_27152';
export function Component27152({ value = 27152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27152, 'data-value': derived.doubled }, children);
}
export default Component27152;
