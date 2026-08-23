import React from 'react';
const LABEL_11168 = 'component_11168';
export function Component11168({ value = 11168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11168, 'data-value': derived.doubled }, children);
}
export default Component11168;
