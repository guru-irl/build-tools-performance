import React from 'react';
const LABEL_42194 = 'component_42194';
export function Component42194({ value = 42194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42194, 'data-value': derived.doubled }, children);
}
export default Component42194;
