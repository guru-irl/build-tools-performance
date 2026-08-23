import React from 'react';
const LABEL_34650 = 'component_34650';
export function Component34650({ value = 34650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34650, 'data-value': derived.doubled }, children);
}
export default Component34650;
