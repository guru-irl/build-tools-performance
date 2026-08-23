import React from 'react';
const LABEL_12435 = 'component_12435';
export function Component12435({ value = 12435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12435, 'data-value': derived.doubled }, children);
}
export default Component12435;
