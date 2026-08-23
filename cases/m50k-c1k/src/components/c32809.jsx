import React from 'react';
const LABEL_32809 = 'component_32809';
export function Component32809({ value = 32809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32809, 'data-value': derived.doubled }, children);
}
export default Component32809;
