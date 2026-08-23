import React from 'react';
const LABEL_27969 = 'component_27969';
export function Component27969({ value = 27969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27969, 'data-value': derived.doubled }, children);
}
export default Component27969;
