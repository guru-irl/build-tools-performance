import React from 'react';
const LABEL_27889 = 'component_27889';
export function Component27889({ value = 27889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27889, 'data-value': derived.doubled }, children);
}
export default Component27889;
