import React from 'react';
const LABEL_28619 = 'component_28619';
export function Component28619({ value = 28619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28619, 'data-value': derived.doubled }, children);
}
export default Component28619;
