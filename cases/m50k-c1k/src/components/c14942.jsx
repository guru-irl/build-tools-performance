import React from 'react';
const LABEL_14942 = 'component_14942';
export function Component14942({ value = 14942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14942, 'data-value': derived.doubled }, children);
}
export default Component14942;
