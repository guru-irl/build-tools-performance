import React from 'react';
const LABEL_22354 = 'component_22354';
export function Component22354({ value = 22354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22354, 'data-value': derived.doubled }, children);
}
export default Component22354;
