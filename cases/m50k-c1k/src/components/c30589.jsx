import React from 'react';
const LABEL_30589 = 'component_30589';
export function Component30589({ value = 30589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30589, 'data-value': derived.doubled }, children);
}
export default Component30589;
