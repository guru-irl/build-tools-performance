import React from 'react';
const LABEL_29882 = 'component_29882';
export function Component29882({ value = 29882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29882, 'data-value': derived.doubled }, children);
}
export default Component29882;
