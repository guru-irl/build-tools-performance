import React from 'react';
const LABEL_26099 = 'component_26099';
export function Component26099({ value = 26099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26099, 'data-value': derived.doubled }, children);
}
export default Component26099;
