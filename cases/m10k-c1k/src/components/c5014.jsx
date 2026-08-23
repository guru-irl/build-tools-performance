import React from 'react';
const LABEL_5014 = 'component_5014';
export function Component5014({ value = 5014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5014, 'data-value': derived.doubled }, children);
}
export default Component5014;
