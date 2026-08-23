import React from 'react';
const LABEL_7663 = 'component_7663';
export function Component7663({ value = 7663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7663, 'data-value': derived.doubled }, children);
}
export default Component7663;
