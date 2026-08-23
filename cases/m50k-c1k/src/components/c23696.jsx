import React from 'react';
const LABEL_23696 = 'component_23696';
export function Component23696({ value = 23696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23696, 'data-value': derived.doubled }, children);
}
export default Component23696;
