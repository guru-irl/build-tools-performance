import React from 'react';
const LABEL_39908 = 'component_39908';
export function Component39908({ value = 39908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39908, 'data-value': derived.doubled }, children);
}
export default Component39908;
