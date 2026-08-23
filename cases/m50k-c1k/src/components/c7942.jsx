import React from 'react';
const LABEL_7942 = 'component_7942';
export function Component7942({ value = 7942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7942, 'data-value': derived.doubled }, children);
}
export default Component7942;
