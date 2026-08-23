import React from 'react';
const LABEL_9619 = 'component_9619';
export function Component9619({ value = 9619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9619, 'data-value': derived.doubled }, children);
}
export default Component9619;
