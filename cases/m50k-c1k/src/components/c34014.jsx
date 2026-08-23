import React from 'react';
const LABEL_34014 = 'component_34014';
export function Component34014({ value = 34014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34014, 'data-value': derived.doubled }, children);
}
export default Component34014;
