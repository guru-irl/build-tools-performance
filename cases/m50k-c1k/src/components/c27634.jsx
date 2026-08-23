import React from 'react';
const LABEL_27634 = 'component_27634';
export function Component27634({ value = 27634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27634, 'data-value': derived.doubled }, children);
}
export default Component27634;
