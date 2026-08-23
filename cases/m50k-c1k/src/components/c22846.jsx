import React from 'react';
const LABEL_22846 = 'component_22846';
export function Component22846({ value = 22846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22846, 'data-value': derived.doubled }, children);
}
export default Component22846;
