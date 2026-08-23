import React from 'react';
const LABEL_27883 = 'component_27883';
export function Component27883({ value = 27883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27883, 'data-value': derived.doubled }, children);
}
export default Component27883;
