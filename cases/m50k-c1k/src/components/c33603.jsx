import React from 'react';
const LABEL_33603 = 'component_33603';
export function Component33603({ value = 33603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33603, 'data-value': derived.doubled }, children);
}
export default Component33603;
