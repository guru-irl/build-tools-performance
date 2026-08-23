import React from 'react';
const LABEL_40278 = 'component_40278';
export function Component40278({ value = 40278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40278, 'data-value': derived.doubled }, children);
}
export default Component40278;
