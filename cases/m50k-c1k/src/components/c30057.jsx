import React from 'react';
const LABEL_30057 = 'component_30057';
export function Component30057({ value = 30057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30057, 'data-value': derived.doubled }, children);
}
export default Component30057;
