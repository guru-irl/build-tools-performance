import React from 'react';
const LABEL_13829 = 'component_13829';
export function Component13829({ value = 13829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13829, 'data-value': derived.doubled }, children);
}
export default Component13829;
