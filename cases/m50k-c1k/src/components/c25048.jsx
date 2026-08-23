import React from 'react';
const LABEL_25048 = 'component_25048';
export function Component25048({ value = 25048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25048, 'data-value': derived.doubled }, children);
}
export default Component25048;
