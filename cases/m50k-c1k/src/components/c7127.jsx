import React from 'react';
const LABEL_7127 = 'component_7127';
export function Component7127({ value = 7127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7127, 'data-value': derived.doubled }, children);
}
export default Component7127;
