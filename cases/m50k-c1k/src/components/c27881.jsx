import React from 'react';
const LABEL_27881 = 'component_27881';
export function Component27881({ value = 27881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27881, 'data-value': derived.doubled }, children);
}
export default Component27881;
