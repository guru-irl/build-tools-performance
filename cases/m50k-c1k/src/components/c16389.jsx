import React from 'react';
const LABEL_16389 = 'component_16389';
export function Component16389({ value = 16389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16389, 'data-value': derived.doubled }, children);
}
export default Component16389;
