import React from 'react';
const LABEL_30160 = 'component_30160';
export function Component30160({ value = 30160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30160, 'data-value': derived.doubled }, children);
}
export default Component30160;
