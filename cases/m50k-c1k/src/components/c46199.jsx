import React from 'react';
const LABEL_46199 = 'component_46199';
export function Component46199({ value = 46199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46199, 'data-value': derived.doubled }, children);
}
export default Component46199;
