import React from 'react';
const LABEL_34798 = 'component_34798';
export function Component34798({ value = 34798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34798, 'data-value': derived.doubled }, children);
}
export default Component34798;
