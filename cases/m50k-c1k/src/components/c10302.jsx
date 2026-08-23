import React from 'react';
const LABEL_10302 = 'component_10302';
export function Component10302({ value = 10302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10302, 'data-value': derived.doubled }, children);
}
export default Component10302;
