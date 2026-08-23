import React from 'react';
const LABEL_35660 = 'component_35660';
export function Component35660({ value = 35660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35660, 'data-value': derived.doubled }, children);
}
export default Component35660;
