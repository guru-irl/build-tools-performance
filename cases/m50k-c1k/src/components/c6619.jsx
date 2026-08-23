import React from 'react';
const LABEL_6619 = 'component_6619';
export function Component6619({ value = 6619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6619, 'data-value': derived.doubled }, children);
}
export default Component6619;
