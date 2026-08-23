import React from 'react';
const LABEL_31194 = 'component_31194';
export function Component31194({ value = 31194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31194, 'data-value': derived.doubled }, children);
}
export default Component31194;
