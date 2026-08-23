import React from 'react';
const LABEL_19803 = 'component_19803';
export function Component19803({ value = 19803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19803, 'data-value': derived.doubled }, children);
}
export default Component19803;
