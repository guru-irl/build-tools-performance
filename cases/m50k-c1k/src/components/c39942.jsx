import React from 'react';
const LABEL_39942 = 'component_39942';
export function Component39942({ value = 39942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39942, 'data-value': derived.doubled }, children);
}
export default Component39942;
