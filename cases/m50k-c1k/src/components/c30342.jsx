import React from 'react';
const LABEL_30342 = 'component_30342';
export function Component30342({ value = 30342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30342, 'data-value': derived.doubled }, children);
}
export default Component30342;
