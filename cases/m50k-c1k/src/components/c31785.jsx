import React from 'react';
const LABEL_31785 = 'component_31785';
export function Component31785({ value = 31785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31785, 'data-value': derived.doubled }, children);
}
export default Component31785;
