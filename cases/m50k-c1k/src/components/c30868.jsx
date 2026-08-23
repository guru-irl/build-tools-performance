import React from 'react';
const LABEL_30868 = 'component_30868';
export function Component30868({ value = 30868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30868, 'data-value': derived.doubled }, children);
}
export default Component30868;
