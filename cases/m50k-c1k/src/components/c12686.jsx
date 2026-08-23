import React from 'react';
const LABEL_12686 = 'component_12686';
export function Component12686({ value = 12686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12686, 'data-value': derived.doubled }, children);
}
export default Component12686;
