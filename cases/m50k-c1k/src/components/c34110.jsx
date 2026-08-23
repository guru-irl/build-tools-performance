import React from 'react';
const LABEL_34110 = 'component_34110';
export function Component34110({ value = 34110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34110, 'data-value': derived.doubled }, children);
}
export default Component34110;
