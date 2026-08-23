import React from 'react';
const LABEL_30738 = 'component_30738';
export function Component30738({ value = 30738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30738, 'data-value': derived.doubled }, children);
}
export default Component30738;
