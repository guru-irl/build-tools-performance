import React from 'react';
const LABEL_8481 = 'component_8481';
export function Component8481({ value = 8481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8481, 'data-value': derived.doubled }, children);
}
export default Component8481;
