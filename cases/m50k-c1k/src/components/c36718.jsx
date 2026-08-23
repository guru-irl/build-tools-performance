import React from 'react';
const LABEL_36718 = 'component_36718';
export function Component36718({ value = 36718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36718, 'data-value': derived.doubled }, children);
}
export default Component36718;
