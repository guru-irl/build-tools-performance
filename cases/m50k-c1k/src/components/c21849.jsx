import React from 'react';
const LABEL_21849 = 'component_21849';
export function Component21849({ value = 21849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21849, 'data-value': derived.doubled }, children);
}
export default Component21849;
