import React from 'react';
const LABEL_30375 = 'component_30375';
export function Component30375({ value = 30375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30375, 'data-value': derived.doubled }, children);
}
export default Component30375;
