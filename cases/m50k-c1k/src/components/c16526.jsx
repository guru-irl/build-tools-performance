import React from 'react';
const LABEL_16526 = 'component_16526';
export function Component16526({ value = 16526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16526, 'data-value': derived.doubled }, children);
}
export default Component16526;
