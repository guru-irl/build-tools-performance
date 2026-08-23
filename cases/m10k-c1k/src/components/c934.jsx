import React from 'react';
const LABEL_934 = 'component_934';
export function Component934({ value = 934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_934, 'data-value': derived.doubled }, children);
}
export default Component934;
