import React from 'react';
const LABEL_19614 = 'component_19614';
export function Component19614({ value = 19614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19614, 'data-value': derived.doubled }, children);
}
export default Component19614;
