import React from 'react';
const LABEL_27065 = 'component_27065';
export function Component27065({ value = 27065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27065, 'data-value': derived.doubled }, children);
}
export default Component27065;
