import React from 'react';
const LABEL_27849 = 'component_27849';
export function Component27849({ value = 27849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27849, 'data-value': derived.doubled }, children);
}
export default Component27849;
