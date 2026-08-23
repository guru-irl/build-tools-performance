import React from 'react';
const LABEL_35753 = 'component_35753';
export function Component35753({ value = 35753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35753, 'data-value': derived.doubled }, children);
}
export default Component35753;
