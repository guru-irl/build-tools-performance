import React from 'react';
const LABEL_32862 = 'component_32862';
export function Component32862({ value = 32862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32862, 'data-value': derived.doubled }, children);
}
export default Component32862;
