import React from 'react';
const LABEL_30353 = 'component_30353';
export function Component30353({ value = 30353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30353, 'data-value': derived.doubled }, children);
}
export default Component30353;
