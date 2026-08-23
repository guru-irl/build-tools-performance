import React from 'react';
const LABEL_22190 = 'component_22190';
export function Component22190({ value = 22190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22190, 'data-value': derived.doubled }, children);
}
export default Component22190;
