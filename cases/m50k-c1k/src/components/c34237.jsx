import React from 'react';
const LABEL_34237 = 'component_34237';
export function Component34237({ value = 34237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34237, 'data-value': derived.doubled }, children);
}
export default Component34237;
