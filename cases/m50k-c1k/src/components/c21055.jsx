import React from 'react';
const LABEL_21055 = 'component_21055';
export function Component21055({ value = 21055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21055, 'data-value': derived.doubled }, children);
}
export default Component21055;
