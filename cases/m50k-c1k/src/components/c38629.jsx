import React from 'react';
const LABEL_38629 = 'component_38629';
export function Component38629({ value = 38629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38629, 'data-value': derived.doubled }, children);
}
export default Component38629;
