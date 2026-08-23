import React from 'react';
const LABEL_5862 = 'component_5862';
export function Component5862({ value = 5862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5862, 'data-value': derived.doubled }, children);
}
export default Component5862;
