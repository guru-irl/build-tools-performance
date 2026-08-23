import React from 'react';
const LABEL_6177 = 'component_6177';
export function Component6177({ value = 6177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6177, 'data-value': derived.doubled }, children);
}
export default Component6177;
