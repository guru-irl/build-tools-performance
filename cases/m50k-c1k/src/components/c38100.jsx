import React from 'react';
const LABEL_38100 = 'component_38100';
export function Component38100({ value = 38100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38100, 'data-value': derived.doubled }, children);
}
export default Component38100;
