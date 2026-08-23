import React from 'react';
const LABEL_30506 = 'component_30506';
export function Component30506({ value = 30506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30506, 'data-value': derived.doubled }, children);
}
export default Component30506;
