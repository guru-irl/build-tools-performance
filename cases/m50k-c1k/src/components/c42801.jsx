import React from 'react';
const LABEL_42801 = 'component_42801';
export function Component42801({ value = 42801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42801, 'data-value': derived.doubled }, children);
}
export default Component42801;
