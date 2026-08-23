import React from 'react';
const LABEL_32462 = 'component_32462';
export function Component32462({ value = 32462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32462, 'data-value': derived.doubled }, children);
}
export default Component32462;
