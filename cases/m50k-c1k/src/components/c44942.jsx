import React from 'react';
const LABEL_44942 = 'component_44942';
export function Component44942({ value = 44942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44942, 'data-value': derived.doubled }, children);
}
export default Component44942;
