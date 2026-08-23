import React from 'react';
const LABEL_21165 = 'component_21165';
export function Component21165({ value = 21165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21165, 'data-value': derived.doubled }, children);
}
export default Component21165;
