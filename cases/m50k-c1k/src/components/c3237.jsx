import React from 'react';
const LABEL_3237 = 'component_3237';
export function Component3237({ value = 3237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3237, 'data-value': derived.doubled }, children);
}
export default Component3237;
