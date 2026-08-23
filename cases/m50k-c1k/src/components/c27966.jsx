import React from 'react';
const LABEL_27966 = 'component_27966';
export function Component27966({ value = 27966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27966, 'data-value': derived.doubled }, children);
}
export default Component27966;
