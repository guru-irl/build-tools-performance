import React from 'react';
const LABEL_25528 = 'component_25528';
export function Component25528({ value = 25528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25528, 'data-value': derived.doubled }, children);
}
export default Component25528;
