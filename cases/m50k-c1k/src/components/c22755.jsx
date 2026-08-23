import React from 'react';
const LABEL_22755 = 'component_22755';
export function Component22755({ value = 22755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22755, 'data-value': derived.doubled }, children);
}
export default Component22755;
