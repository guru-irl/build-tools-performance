import React from 'react';
const LABEL_4481 = 'component_4481';
export function Component4481({ value = 4481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4481, 'data-value': derived.doubled }, children);
}
export default Component4481;
