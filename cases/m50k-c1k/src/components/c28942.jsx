import React from 'react';
const LABEL_28942 = 'component_28942';
export function Component28942({ value = 28942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28942, 'data-value': derived.doubled }, children);
}
export default Component28942;
