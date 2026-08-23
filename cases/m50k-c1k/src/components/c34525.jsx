import React from 'react';
const LABEL_34525 = 'component_34525';
export function Component34525({ value = 34525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34525, 'data-value': derived.doubled }, children);
}
export default Component34525;
