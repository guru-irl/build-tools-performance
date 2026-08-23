import React from 'react';
const LABEL_30183 = 'component_30183';
export function Component30183({ value = 30183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30183, 'data-value': derived.doubled }, children);
}
export default Component30183;
