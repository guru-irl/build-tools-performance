import React from 'react';
const LABEL_35720 = 'component_35720';
export function Component35720({ value = 35720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35720, 'data-value': derived.doubled }, children);
}
export default Component35720;
