import React from 'react';
const LABEL_24194 = 'component_24194';
export function Component24194({ value = 24194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24194, 'data-value': derived.doubled }, children);
}
export default Component24194;
