import React from 'react';
const LABEL_35806 = 'component_35806';
export function Component35806({ value = 35806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35806, 'data-value': derived.doubled }, children);
}
export default Component35806;
