import React from 'react';
const LABEL_30913 = 'component_30913';
export function Component30913({ value = 30913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30913, 'data-value': derived.doubled }, children);
}
export default Component30913;
