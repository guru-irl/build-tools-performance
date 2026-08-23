import React from 'react';
const LABEL_4132 = 'component_4132';
export function Component4132({ value = 4132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4132, 'data-value': derived.doubled }, children);
}
export default Component4132;
