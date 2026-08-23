import React from 'react';
const LABEL_36798 = 'component_36798';
export function Component36798({ value = 36798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36798, 'data-value': derived.doubled }, children);
}
export default Component36798;
