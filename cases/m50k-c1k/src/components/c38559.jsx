import React from 'react';
const LABEL_38559 = 'component_38559';
export function Component38559({ value = 38559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38559, 'data-value': derived.doubled }, children);
}
export default Component38559;
