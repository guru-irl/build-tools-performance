import React from 'react';
const LABEL_10583 = 'component_10583';
export function Component10583({ value = 10583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10583, 'data-value': derived.doubled }, children);
}
export default Component10583;
