import React from 'react';
const LABEL_12451 = 'component_12451';
export function Component12451({ value = 12451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12451, 'data-value': derived.doubled }, children);
}
export default Component12451;
