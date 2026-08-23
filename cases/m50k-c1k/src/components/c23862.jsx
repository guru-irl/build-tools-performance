import React from 'react';
const LABEL_23862 = 'component_23862';
export function Component23862({ value = 23862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23862, 'data-value': derived.doubled }, children);
}
export default Component23862;
