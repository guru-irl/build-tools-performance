import React from 'react';
const LABEL_20059 = 'component_20059';
export function Component20059({ value = 20059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20059, 'data-value': derived.doubled }, children);
}
export default Component20059;
