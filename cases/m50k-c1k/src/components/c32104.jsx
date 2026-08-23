import React from 'react';
const LABEL_32104 = 'component_32104';
export function Component32104({ value = 32104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32104, 'data-value': derived.doubled }, children);
}
export default Component32104;
