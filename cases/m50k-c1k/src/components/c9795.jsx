import React from 'react';
const LABEL_9795 = 'component_9795';
export function Component9795({ value = 9795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9795, 'data-value': derived.doubled }, children);
}
export default Component9795;
