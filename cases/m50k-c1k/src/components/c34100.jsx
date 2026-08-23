import React from 'react';
const LABEL_34100 = 'component_34100';
export function Component34100({ value = 34100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34100, 'data-value': derived.doubled }, children);
}
export default Component34100;
