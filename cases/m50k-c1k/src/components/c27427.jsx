import React from 'react';
const LABEL_27427 = 'component_27427';
export function Component27427({ value = 27427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27427, 'data-value': derived.doubled }, children);
}
export default Component27427;
