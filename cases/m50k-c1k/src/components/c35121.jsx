import React from 'react';
const LABEL_35121 = 'component_35121';
export function Component35121({ value = 35121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35121, 'data-value': derived.doubled }, children);
}
export default Component35121;
