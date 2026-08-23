import React from 'react';
const LABEL_32325 = 'component_32325';
export function Component32325({ value = 32325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32325, 'data-value': derived.doubled }, children);
}
export default Component32325;
