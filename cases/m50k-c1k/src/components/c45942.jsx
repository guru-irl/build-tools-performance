import React from 'react';
const LABEL_45942 = 'component_45942';
export function Component45942({ value = 45942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45942, 'data-value': derived.doubled }, children);
}
export default Component45942;
