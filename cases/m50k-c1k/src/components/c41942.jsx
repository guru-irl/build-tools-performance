import React from 'react';
const LABEL_41942 = 'component_41942';
export function Component41942({ value = 41942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41942, 'data-value': derived.doubled }, children);
}
export default Component41942;
