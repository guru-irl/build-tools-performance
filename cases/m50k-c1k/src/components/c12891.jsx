import React from 'react';
const LABEL_12891 = 'component_12891';
export function Component12891({ value = 12891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12891, 'data-value': derived.doubled }, children);
}
export default Component12891;
