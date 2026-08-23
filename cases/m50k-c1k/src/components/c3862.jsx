import React from 'react';
const LABEL_3862 = 'component_3862';
export function Component3862({ value = 3862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3862, 'data-value': derived.doubled }, children);
}
export default Component3862;
