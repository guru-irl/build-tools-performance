import React from 'react';
const LABEL_6014 = 'component_6014';
export function Component6014({ value = 6014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6014, 'data-value': derived.doubled }, children);
}
export default Component6014;
