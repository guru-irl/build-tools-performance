import React from 'react';
const LABEL_34581 = 'component_34581';
export function Component34581({ value = 34581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34581, 'data-value': derived.doubled }, children);
}
export default Component34581;
