import React from 'react';
const LABEL_27460 = 'component_27460';
export function Component27460({ value = 27460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27460, 'data-value': derived.doubled }, children);
}
export default Component27460;
