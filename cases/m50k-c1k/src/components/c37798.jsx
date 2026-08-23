import React from 'react';
const LABEL_37798 = 'component_37798';
export function Component37798({ value = 37798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37798, 'data-value': derived.doubled }, children);
}
export default Component37798;
