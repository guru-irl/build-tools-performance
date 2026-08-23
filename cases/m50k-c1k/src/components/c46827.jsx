import React from 'react';
const LABEL_46827 = 'component_46827';
export function Component46827({ value = 46827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46827, 'data-value': derived.doubled }, children);
}
export default Component46827;
