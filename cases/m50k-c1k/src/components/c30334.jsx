import React from 'react';
const LABEL_30334 = 'component_30334';
export function Component30334({ value = 30334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30334, 'data-value': derived.doubled }, children);
}
export default Component30334;
