import React from 'react';
const LABEL_27168 = 'component_27168';
export function Component27168({ value = 27168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27168, 'data-value': derived.doubled }, children);
}
export default Component27168;
