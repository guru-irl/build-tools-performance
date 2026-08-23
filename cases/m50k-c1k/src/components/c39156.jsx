import React from 'react';
const LABEL_39156 = 'component_39156';
export function Component39156({ value = 39156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39156, 'data-value': derived.doubled }, children);
}
export default Component39156;
