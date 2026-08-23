import React from 'react';
const LABEL_44050 = 'component_44050';
export function Component44050({ value = 44050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44050, 'data-value': derived.doubled }, children);
}
export default Component44050;
