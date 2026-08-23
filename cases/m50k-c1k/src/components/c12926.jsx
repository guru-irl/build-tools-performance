import React from 'react';
const LABEL_12926 = 'component_12926';
export function Component12926({ value = 12926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12926, 'data-value': derived.doubled }, children);
}
export default Component12926;
