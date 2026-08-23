import React from 'react';
const LABEL_10014 = 'component_10014';
export function Component10014({ value = 10014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10014, 'data-value': derived.doubled }, children);
}
export default Component10014;
