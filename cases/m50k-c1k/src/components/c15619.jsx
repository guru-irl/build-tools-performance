import React from 'react';
const LABEL_15619 = 'component_15619';
export function Component15619({ value = 15619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15619, 'data-value': derived.doubled }, children);
}
export default Component15619;
