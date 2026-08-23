import React from 'react';
const LABEL_30487 = 'component_30487';
export function Component30487({ value = 30487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30487, 'data-value': derived.doubled }, children);
}
export default Component30487;
