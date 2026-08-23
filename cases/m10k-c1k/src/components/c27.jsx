import React from 'react';
const LABEL_27 = 'component_27';
export function Component27({ value = 27, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27, 'data-value': derived.doubled }, children);
}
export default Component27;
