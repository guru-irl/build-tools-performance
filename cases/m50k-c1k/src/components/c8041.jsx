import React from 'react';
const LABEL_8041 = 'component_8041';
export function Component8041({ value = 8041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8041, 'data-value': derived.doubled }, children);
}
export default Component8041;
