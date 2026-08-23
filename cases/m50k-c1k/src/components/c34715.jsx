import React from 'react';
const LABEL_34715 = 'component_34715';
export function Component34715({ value = 34715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34715, 'data-value': derived.doubled }, children);
}
export default Component34715;
