import React from 'react';
const LABEL_27523 = 'component_27523';
export function Component27523({ value = 27523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27523, 'data-value': derived.doubled }, children);
}
export default Component27523;
