import React from 'react';
const LABEL_12763 = 'component_12763';
export function Component12763({ value = 12763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12763, 'data-value': derived.doubled }, children);
}
export default Component12763;
