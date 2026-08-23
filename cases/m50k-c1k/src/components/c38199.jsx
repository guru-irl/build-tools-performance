import React from 'react';
const LABEL_38199 = 'component_38199';
export function Component38199({ value = 38199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38199, 'data-value': derived.doubled }, children);
}
export default Component38199;
