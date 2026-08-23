import React from 'react';
const LABEL_4614 = 'component_4614';
export function Component4614({ value = 4614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4614, 'data-value': derived.doubled }, children);
}
export default Component4614;
