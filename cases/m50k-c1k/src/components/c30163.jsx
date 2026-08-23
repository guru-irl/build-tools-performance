import React from 'react';
const LABEL_30163 = 'component_30163';
export function Component30163({ value = 30163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30163, 'data-value': derived.doubled }, children);
}
export default Component30163;
