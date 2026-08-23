import React from 'react';
const LABEL_38079 = 'component_38079';
export function Component38079({ value = 38079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38079, 'data-value': derived.doubled }, children);
}
export default Component38079;
