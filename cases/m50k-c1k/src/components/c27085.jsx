import React from 'react';
const LABEL_27085 = 'component_27085';
export function Component27085({ value = 27085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27085, 'data-value': derived.doubled }, children);
}
export default Component27085;
