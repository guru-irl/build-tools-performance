import React from 'react';
const LABEL_12628 = 'component_12628';
export function Component12628({ value = 12628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12628, 'data-value': derived.doubled }, children);
}
export default Component12628;
