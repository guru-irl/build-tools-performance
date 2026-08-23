import React from 'react';
const LABEL_13977 = 'component_13977';
export function Component13977({ value = 13977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13977, 'data-value': derived.doubled }, children);
}
export default Component13977;
