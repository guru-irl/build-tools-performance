import React from 'react';
const LABEL_18942 = 'component_18942';
export function Component18942({ value = 18942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18942, 'data-value': derived.doubled }, children);
}
export default Component18942;
