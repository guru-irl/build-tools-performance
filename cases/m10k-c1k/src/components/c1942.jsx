import React from 'react';
const LABEL_1942 = 'component_1942';
export function Component1942({ value = 1942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1942, 'data-value': derived.doubled }, children);
}
export default Component1942;
