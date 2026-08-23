import React from 'react';
const LABEL_38641 = 'component_38641';
export function Component38641({ value = 38641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38641, 'data-value': derived.doubled }, children);
}
export default Component38641;
