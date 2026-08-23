import React from 'react';
const LABEL_18977 = 'component_18977';
export function Component18977({ value = 18977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18977, 'data-value': derived.doubled }, children);
}
export default Component18977;
