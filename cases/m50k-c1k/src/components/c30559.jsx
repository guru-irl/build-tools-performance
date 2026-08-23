import React from 'react';
const LABEL_30559 = 'component_30559';
export function Component30559({ value = 30559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30559, 'data-value': derived.doubled }, children);
}
export default Component30559;
