import React from 'react';
const LABEL_8037 = 'component_8037';
export function Component8037({ value = 8037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8037, 'data-value': derived.doubled }, children);
}
export default Component8037;
