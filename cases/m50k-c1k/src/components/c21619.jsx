import React from 'react';
const LABEL_21619 = 'component_21619';
export function Component21619({ value = 21619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21619, 'data-value': derived.doubled }, children);
}
export default Component21619;
