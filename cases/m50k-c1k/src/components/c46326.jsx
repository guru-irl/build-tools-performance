import React from 'react';
const LABEL_46326 = 'component_46326';
export function Component46326({ value = 46326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46326, 'data-value': derived.doubled }, children);
}
export default Component46326;
