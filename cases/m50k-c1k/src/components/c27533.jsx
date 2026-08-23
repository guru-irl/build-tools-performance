import React from 'react';
const LABEL_27533 = 'component_27533';
export function Component27533({ value = 27533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27533, 'data-value': derived.doubled }, children);
}
export default Component27533;
