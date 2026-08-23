import React from 'react';
const LABEL_32132 = 'component_32132';
export function Component32132({ value = 32132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32132, 'data-value': derived.doubled }, children);
}
export default Component32132;
