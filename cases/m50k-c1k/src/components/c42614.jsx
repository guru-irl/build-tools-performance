import React from 'react';
const LABEL_42614 = 'component_42614';
export function Component42614({ value = 42614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42614, 'data-value': derived.doubled }, children);
}
export default Component42614;
