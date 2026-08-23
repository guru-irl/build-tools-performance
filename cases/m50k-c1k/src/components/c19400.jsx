import React from 'react';
const LABEL_19400 = 'component_19400';
export function Component19400({ value = 19400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19400, 'data-value': derived.doubled }, children);
}
export default Component19400;
