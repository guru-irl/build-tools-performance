import React from 'react';
const LABEL_30539 = 'component_30539';
export function Component30539({ value = 30539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30539, 'data-value': derived.doubled }, children);
}
export default Component30539;
