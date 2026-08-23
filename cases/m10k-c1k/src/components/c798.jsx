import React from 'react';
const LABEL_798 = 'component_798';
export function Component798({ value = 798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_798, 'data-value': derived.doubled }, children);
}
export default Component798;
