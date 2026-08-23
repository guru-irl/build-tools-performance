import React from 'react';
const LABEL_2276 = 'component_2276';
export function Component2276({ value = 2276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2276, 'data-value': derived.doubled }, children);
}
export default Component2276;
