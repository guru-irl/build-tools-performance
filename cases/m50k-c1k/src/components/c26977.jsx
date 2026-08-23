import React from 'react';
const LABEL_26977 = 'component_26977';
export function Component26977({ value = 26977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26977, 'data-value': derived.doubled }, children);
}
export default Component26977;
