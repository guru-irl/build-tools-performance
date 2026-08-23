import React from 'react';
const LABEL_46445 = 'component_46445';
export function Component46445({ value = 46445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46445, 'data-value': derived.doubled }, children);
}
export default Component46445;
