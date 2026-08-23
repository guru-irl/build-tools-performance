import React from 'react';
const LABEL_35047 = 'component_35047';
export function Component35047({ value = 35047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35047, 'data-value': derived.doubled }, children);
}
export default Component35047;
