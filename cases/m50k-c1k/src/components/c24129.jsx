import React from 'react';
const LABEL_24129 = 'component_24129';
export function Component24129({ value = 24129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24129, 'data-value': derived.doubled }, children);
}
export default Component24129;
