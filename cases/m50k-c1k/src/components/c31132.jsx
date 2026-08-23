import React from 'react';
const LABEL_31132 = 'component_31132';
export function Component31132({ value = 31132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31132, 'data-value': derived.doubled }, children);
}
export default Component31132;
