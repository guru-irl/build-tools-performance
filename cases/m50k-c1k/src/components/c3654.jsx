import React from 'react';
const LABEL_3654 = 'component_3654';
export function Component3654({ value = 3654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3654, 'data-value': derived.doubled }, children);
}
export default Component3654;
