import React from 'react';
const LABEL_34132 = 'component_34132';
export function Component34132({ value = 34132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34132, 'data-value': derived.doubled }, children);
}
export default Component34132;
