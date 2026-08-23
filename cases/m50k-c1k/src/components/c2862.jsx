import React from 'react';
const LABEL_2862 = 'component_2862';
export function Component2862({ value = 2862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2862, 'data-value': derived.doubled }, children);
}
export default Component2862;
