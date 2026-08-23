import React from 'react';
const LABEL_30219 = 'component_30219';
export function Component30219({ value = 30219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30219, 'data-value': derived.doubled }, children);
}
export default Component30219;
