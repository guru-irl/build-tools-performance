import React from 'react';
const LABEL_35481 = 'component_35481';
export function Component35481({ value = 35481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35481, 'data-value': derived.doubled }, children);
}
export default Component35481;
