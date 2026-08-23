import React from 'react';
const LABEL_12704 = 'component_12704';
export function Component12704({ value = 12704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12704, 'data-value': derived.doubled }, children);
}
export default Component12704;
