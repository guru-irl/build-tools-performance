import React from 'react';
const LABEL_38354 = 'component_38354';
export function Component38354({ value = 38354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38354, 'data-value': derived.doubled }, children);
}
export default Component38354;
