import React from 'react';
const LABEL_41654 = 'component_41654';
export function Component41654({ value = 41654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41654, 'data-value': derived.doubled }, children);
}
export default Component41654;
