import React from 'react';
const LABEL_40882 = 'component_40882';
export function Component40882({ value = 40882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40882, 'data-value': derived.doubled }, children);
}
export default Component40882;
