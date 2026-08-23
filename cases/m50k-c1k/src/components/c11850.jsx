import React from 'react';
const LABEL_11850 = 'component_11850';
export function Component11850({ value = 11850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11850, 'data-value': derived.doubled }, children);
}
export default Component11850;
