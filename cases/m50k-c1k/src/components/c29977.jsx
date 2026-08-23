import React from 'react';
const LABEL_29977 = 'component_29977';
export function Component29977({ value = 29977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29977, 'data-value': derived.doubled }, children);
}
export default Component29977;
