import React from 'react';
const LABEL_30345 = 'component_30345';
export function Component30345({ value = 30345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30345, 'data-value': derived.doubled }, children);
}
export default Component30345;
