import React from 'react';
const LABEL_22942 = 'component_22942';
export function Component22942({ value = 22942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22942, 'data-value': derived.doubled }, children);
}
export default Component22942;
