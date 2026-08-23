import React from 'react';
const LABEL_19750 = 'component_19750';
export function Component19750({ value = 19750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19750, 'data-value': derived.doubled }, children);
}
export default Component19750;
