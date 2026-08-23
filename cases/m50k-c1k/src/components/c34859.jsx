import React from 'react';
const LABEL_34859 = 'component_34859';
export function Component34859({ value = 34859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34859, 'data-value': derived.doubled }, children);
}
export default Component34859;
