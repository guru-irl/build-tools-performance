import React from 'react';
const LABEL_29780 = 'component_29780';
export function Component29780({ value = 29780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29780, 'data-value': derived.doubled }, children);
}
export default Component29780;
