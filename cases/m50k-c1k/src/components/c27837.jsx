import React from 'react';
const LABEL_27837 = 'component_27837';
export function Component27837({ value = 27837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27837, 'data-value': derived.doubled }, children);
}
export default Component27837;
