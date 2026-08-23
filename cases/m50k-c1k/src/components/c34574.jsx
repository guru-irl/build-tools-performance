import React from 'react';
const LABEL_34574 = 'component_34574';
export function Component34574({ value = 34574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34574, 'data-value': derived.doubled }, children);
}
export default Component34574;
