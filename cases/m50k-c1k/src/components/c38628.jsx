import React from 'react';
const LABEL_38628 = 'component_38628';
export function Component38628({ value = 38628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38628, 'data-value': derived.doubled }, children);
}
export default Component38628;
