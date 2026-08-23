import React from 'react';
const LABEL_32194 = 'component_32194';
export function Component32194({ value = 32194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32194, 'data-value': derived.doubled }, children);
}
export default Component32194;
