import React from 'react';
const LABEL_19942 = 'component_19942';
export function Component19942({ value = 19942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19942, 'data-value': derived.doubled }, children);
}
export default Component19942;
