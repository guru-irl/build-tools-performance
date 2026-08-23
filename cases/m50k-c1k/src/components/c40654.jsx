import React from 'react';
const LABEL_40654 = 'component_40654';
export function Component40654({ value = 40654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40654, 'data-value': derived.doubled }, children);
}
export default Component40654;
