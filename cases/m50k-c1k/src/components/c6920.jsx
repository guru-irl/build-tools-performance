import React from 'react';
const LABEL_6920 = 'component_6920';
export function Component6920({ value = 6920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6920, 'data-value': derived.doubled }, children);
}
export default Component6920;
