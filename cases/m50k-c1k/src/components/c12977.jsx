import React from 'react';
const LABEL_12977 = 'component_12977';
export function Component12977({ value = 12977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12977, 'data-value': derived.doubled }, children);
}
export default Component12977;
