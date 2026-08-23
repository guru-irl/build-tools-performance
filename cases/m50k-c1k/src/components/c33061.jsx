import React from 'react';
const LABEL_33061 = 'component_33061';
export function Component33061({ value = 33061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33061, 'data-value': derived.doubled }, children);
}
export default Component33061;
