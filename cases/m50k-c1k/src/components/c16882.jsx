import React from 'react';
const LABEL_16882 = 'component_16882';
export function Component16882({ value = 16882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16882, 'data-value': derived.doubled }, children);
}
export default Component16882;
