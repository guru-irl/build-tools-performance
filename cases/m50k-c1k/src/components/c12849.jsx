import React from 'react';
const LABEL_12849 = 'component_12849';
export function Component12849({ value = 12849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12849, 'data-value': derived.doubled }, children);
}
export default Component12849;
