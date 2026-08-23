import React from 'react';
const LABEL_40942 = 'component_40942';
export function Component40942({ value = 40942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40942, 'data-value': derived.doubled }, children);
}
export default Component40942;
