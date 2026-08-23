import React from 'react';
const LABEL_12795 = 'component_12795';
export function Component12795({ value = 12795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12795, 'data-value': derived.doubled }, children);
}
export default Component12795;
