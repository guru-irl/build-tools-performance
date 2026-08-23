import React from 'react';
const LABEL_27514 = 'component_27514';
export function Component27514({ value = 27514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27514, 'data-value': derived.doubled }, children);
}
export default Component27514;
