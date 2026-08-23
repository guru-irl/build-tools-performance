import React from 'react';
const LABEL_3079 = 'component_3079';
export function Component3079({ value = 3079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3079, 'data-value': derived.doubled }, children);
}
export default Component3079;
