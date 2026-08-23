import React from 'react';
const LABEL_35710 = 'component_35710';
export function Component35710({ value = 35710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35710, 'data-value': derived.doubled }, children);
}
export default Component35710;
