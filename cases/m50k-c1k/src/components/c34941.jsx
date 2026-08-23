import React from 'react';
const LABEL_34941 = 'component_34941';
export function Component34941({ value = 34941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34941, 'data-value': derived.doubled }, children);
}
export default Component34941;
