import React from 'react';
const LABEL_12781 = 'component_12781';
export function Component12781({ value = 12781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12781, 'data-value': derived.doubled }, children);
}
export default Component12781;
