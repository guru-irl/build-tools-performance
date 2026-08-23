import React from 'react';
const LABEL_14882 = 'component_14882';
export function Component14882({ value = 14882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14882, 'data-value': derived.doubled }, children);
}
export default Component14882;
