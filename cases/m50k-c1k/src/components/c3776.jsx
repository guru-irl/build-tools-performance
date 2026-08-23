import React from 'react';
const LABEL_3776 = 'component_3776';
export function Component3776({ value = 3776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3776, 'data-value': derived.doubled }, children);
}
export default Component3776;
