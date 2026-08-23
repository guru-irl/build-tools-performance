import React from 'react';
const LABEL_12772 = 'component_12772';
export function Component12772({ value = 12772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12772, 'data-value': derived.doubled }, children);
}
export default Component12772;
