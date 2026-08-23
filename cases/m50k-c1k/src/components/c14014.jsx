import React from 'react';
const LABEL_14014 = 'component_14014';
export function Component14014({ value = 14014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14014, 'data-value': derived.doubled }, children);
}
export default Component14014;
