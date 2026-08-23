import React from 'react';
const LABEL_19055 = 'component_19055';
export function Component19055({ value = 19055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19055, 'data-value': derived.doubled }, children);
}
export default Component19055;
