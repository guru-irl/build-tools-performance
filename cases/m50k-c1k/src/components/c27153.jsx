import React from 'react';
const LABEL_27153 = 'component_27153';
export function Component27153({ value = 27153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27153, 'data-value': derived.doubled }, children);
}
export default Component27153;
