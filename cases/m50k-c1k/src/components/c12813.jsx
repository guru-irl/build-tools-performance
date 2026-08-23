import React from 'react';
const LABEL_12813 = 'component_12813';
export function Component12813({ value = 12813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12813, 'data-value': derived.doubled }, children);
}
export default Component12813;
