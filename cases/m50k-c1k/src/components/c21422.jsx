import React from 'react';
const LABEL_21422 = 'component_21422';
export function Component21422({ value = 21422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21422, 'data-value': derived.doubled }, children);
}
export default Component21422;
