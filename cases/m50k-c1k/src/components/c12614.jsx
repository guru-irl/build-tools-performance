import React from 'react';
const LABEL_12614 = 'component_12614';
export function Component12614({ value = 12614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12614, 'data-value': derived.doubled }, children);
}
export default Component12614;
