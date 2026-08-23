import React from 'react';
const LABEL_35027 = 'component_35027';
export function Component35027({ value = 35027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35027, 'data-value': derived.doubled }, children);
}
export default Component35027;
