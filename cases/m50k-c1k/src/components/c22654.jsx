import React from 'react';
const LABEL_22654 = 'component_22654';
export function Component22654({ value = 22654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22654, 'data-value': derived.doubled }, children);
}
export default Component22654;
