import React from 'react';
const LABEL_24515 = 'component_24515';
export function Component24515({ value = 24515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24515, 'data-value': derived.doubled }, children);
}
export default Component24515;
