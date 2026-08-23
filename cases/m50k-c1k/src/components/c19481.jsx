import React from 'react';
const LABEL_19481 = 'component_19481';
export function Component19481({ value = 19481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19481, 'data-value': derived.doubled }, children);
}
export default Component19481;
