import React from 'react';
const LABEL_30358 = 'component_30358';
export function Component30358({ value = 30358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30358, 'data-value': derived.doubled }, children);
}
export default Component30358;
