import React from 'react';
const LABEL_38143 = 'component_38143';
export function Component38143({ value = 38143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38143, 'data-value': derived.doubled }, children);
}
export default Component38143;
