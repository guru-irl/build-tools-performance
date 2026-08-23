import React from 'react';
const LABEL_25102 = 'component_25102';
export function Component25102({ value = 25102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25102, 'data-value': derived.doubled }, children);
}
export default Component25102;
