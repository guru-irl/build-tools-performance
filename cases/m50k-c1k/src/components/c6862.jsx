import React from 'react';
const LABEL_6862 = 'component_6862';
export function Component6862({ value = 6862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6862, 'data-value': derived.doubled }, children);
}
export default Component6862;
