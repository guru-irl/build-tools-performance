import React from 'react';
const LABEL_21596 = 'component_21596';
export function Component21596({ value = 21596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21596, 'data-value': derived.doubled }, children);
}
export default Component21596;
