import React from 'react';
const LABEL_16014 = 'component_16014';
export function Component16014({ value = 16014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16014, 'data-value': derived.doubled }, children);
}
export default Component16014;
