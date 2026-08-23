import React from 'react';
const LABEL_8918 = 'component_8918';
export function Component8918({ value = 8918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8918, 'data-value': derived.doubled }, children);
}
export default Component8918;
