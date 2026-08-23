import React from 'react';
const LABEL_3755 = 'component_3755';
export function Component3755({ value = 3755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3755, 'data-value': derived.doubled }, children);
}
export default Component3755;
