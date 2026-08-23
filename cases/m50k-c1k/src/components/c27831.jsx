import React from 'react';
const LABEL_27831 = 'component_27831';
export function Component27831({ value = 27831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27831, 'data-value': derived.doubled }, children);
}
export default Component27831;
