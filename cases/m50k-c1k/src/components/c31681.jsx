import React from 'react';
const LABEL_31681 = 'component_31681';
export function Component31681({ value = 31681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31681, 'data-value': derived.doubled }, children);
}
export default Component31681;
