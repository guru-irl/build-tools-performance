import React from 'react';
const LABEL_24027 = 'component_24027';
export function Component24027({ value = 24027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24027, 'data-value': derived.doubled }, children);
}
export default Component24027;
