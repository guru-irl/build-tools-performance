import React from 'react';
const LABEL_12641 = 'component_12641';
export function Component12641({ value = 12641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12641, 'data-value': derived.doubled }, children);
}
export default Component12641;
