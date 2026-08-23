import React from 'react';
const LABEL_29628 = 'component_29628';
export function Component29628({ value = 29628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29628, 'data-value': derived.doubled }, children);
}
export default Component29628;
