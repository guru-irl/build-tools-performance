import React from 'react';
const LABEL_30274 = 'component_30274';
export function Component30274({ value = 30274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30274, 'data-value': derived.doubled }, children);
}
export default Component30274;
