import React from 'react';
const LABEL_30240 = 'component_30240';
export function Component30240({ value = 30240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30240, 'data-value': derived.doubled }, children);
}
export default Component30240;
