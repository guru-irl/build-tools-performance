import React from 'react';
const LABEL_33284 = 'component_33284';
export function Component33284({ value = 33284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33284, 'data-value': derived.doubled }, children);
}
export default Component33284;
