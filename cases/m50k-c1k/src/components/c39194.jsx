import React from 'react';
const LABEL_39194 = 'component_39194';
export function Component39194({ value = 39194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39194, 'data-value': derived.doubled }, children);
}
export default Component39194;
