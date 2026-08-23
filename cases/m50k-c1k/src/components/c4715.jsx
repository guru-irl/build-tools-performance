import React from 'react';
const LABEL_4715 = 'component_4715';
export function Component4715({ value = 4715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4715, 'data-value': derived.doubled }, children);
}
export default Component4715;
