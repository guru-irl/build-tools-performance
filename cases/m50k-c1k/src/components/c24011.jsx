import React from 'react';
const LABEL_24011 = 'component_24011';
export function Component24011({ value = 24011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24011, 'data-value': derived.doubled }, children);
}
export default Component24011;
