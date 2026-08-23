import React from 'react';
const LABEL_46332 = 'component_46332';
export function Component46332({ value = 46332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46332, 'data-value': derived.doubled }, children);
}
export default Component46332;
