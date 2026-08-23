import React from 'react';
const LABEL_3132 = 'component_3132';
export function Component3132({ value = 3132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3132, 'data-value': derived.doubled }, children);
}
export default Component3132;
