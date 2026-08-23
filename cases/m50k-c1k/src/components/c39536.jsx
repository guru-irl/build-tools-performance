import React from 'react';
const LABEL_39536 = 'component_39536';
export function Component39536({ value = 39536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39536, 'data-value': derived.doubled }, children);
}
export default Component39536;
