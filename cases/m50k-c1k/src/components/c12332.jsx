import React from 'react';
const LABEL_12332 = 'component_12332';
export function Component12332({ value = 12332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12332, 'data-value': derived.doubled }, children);
}
export default Component12332;
