import React from 'react';
const LABEL_23704 = 'component_23704';
export function Component23704({ value = 23704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23704, 'data-value': derived.doubled }, children);
}
export default Component23704;
