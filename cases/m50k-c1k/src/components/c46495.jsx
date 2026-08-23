import React from 'react';
const LABEL_46495 = 'component_46495';
export function Component46495({ value = 46495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46495, 'data-value': derived.doubled }, children);
}
export default Component46495;
