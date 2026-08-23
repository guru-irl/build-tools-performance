import React from 'react';
const LABEL_25177 = 'component_25177';
export function Component25177({ value = 25177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25177, 'data-value': derived.doubled }, children);
}
export default Component25177;
