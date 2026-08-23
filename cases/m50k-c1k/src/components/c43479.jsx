import React from 'react';
const LABEL_43479 = 'component_43479';
export function Component43479({ value = 43479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43479, 'data-value': derived.doubled }, children);
}
export default Component43479;
