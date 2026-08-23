import React from 'react';
const LABEL_34159 = 'component_34159';
export function Component34159({ value = 34159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34159, 'data-value': derived.doubled }, children);
}
export default Component34159;
