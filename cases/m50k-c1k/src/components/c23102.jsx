import React from 'react';
const LABEL_23102 = 'component_23102';
export function Component23102({ value = 23102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23102, 'data-value': derived.doubled }, children);
}
export default Component23102;
