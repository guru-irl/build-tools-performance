import React from 'react';
const LABEL_10102 = 'component_10102';
export function Component10102({ value = 10102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10102, 'data-value': derived.doubled }, children);
}
export default Component10102;
