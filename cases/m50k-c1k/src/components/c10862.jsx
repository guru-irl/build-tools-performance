import React from 'react';
const LABEL_10862 = 'component_10862';
export function Component10862({ value = 10862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10862, 'data-value': derived.doubled }, children);
}
export default Component10862;
