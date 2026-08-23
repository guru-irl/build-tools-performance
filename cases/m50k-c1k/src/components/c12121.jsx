import React from 'react';
const LABEL_12121 = 'component_12121';
export function Component12121({ value = 12121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12121, 'data-value': derived.doubled }, children);
}
export default Component12121;
