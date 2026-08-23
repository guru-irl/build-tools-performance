import React from 'react';
const LABEL_40798 = 'component_40798';
export function Component40798({ value = 40798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40798, 'data-value': derived.doubled }, children);
}
export default Component40798;
