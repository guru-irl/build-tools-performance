import React from 'react';
const LABEL_31809 = 'component_31809';
export function Component31809({ value = 31809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31809, 'data-value': derived.doubled }, children);
}
export default Component31809;
