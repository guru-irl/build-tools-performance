import React from 'react';
const LABEL_38487 = 'component_38487';
export function Component38487({ value = 38487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38487, 'data-value': derived.doubled }, children);
}
export default Component38487;
