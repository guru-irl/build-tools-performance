import React from 'react';
const LABEL_5721 = 'component_5721';
export function Component5721({ value = 5721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5721, 'data-value': derived.doubled }, children);
}
export default Component5721;
