import React from 'react';
const LABEL_12541 = 'component_12541';
export function Component12541({ value = 12541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12541, 'data-value': derived.doubled }, children);
}
export default Component12541;
