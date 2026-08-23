import React from 'react';
const LABEL_34047 = 'component_34047';
export function Component34047({ value = 34047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34047, 'data-value': derived.doubled }, children);
}
export default Component34047;
