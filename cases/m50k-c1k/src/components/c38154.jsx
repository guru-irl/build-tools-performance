import React from 'react';
const LABEL_38154 = 'component_38154';
export function Component38154({ value = 38154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38154, 'data-value': derived.doubled }, children);
}
export default Component38154;
