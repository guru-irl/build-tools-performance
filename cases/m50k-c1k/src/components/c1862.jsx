import React from 'react';
const LABEL_1862 = 'component_1862';
export function Component1862({ value = 1862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1862, 'data-value': derived.doubled }, children);
}
export default Component1862;
