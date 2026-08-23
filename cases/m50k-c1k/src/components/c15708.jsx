import React from 'react';
const LABEL_15708 = 'component_15708';
export function Component15708({ value = 15708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15708, 'data-value': derived.doubled }, children);
}
export default Component15708;
