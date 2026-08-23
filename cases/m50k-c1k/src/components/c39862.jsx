import React from 'react';
const LABEL_39862 = 'component_39862';
export function Component39862({ value = 39862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39862, 'data-value': derived.doubled }, children);
}
export default Component39862;
