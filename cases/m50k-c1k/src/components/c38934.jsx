import React from 'react';
const LABEL_38934 = 'component_38934';
export function Component38934({ value = 38934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38934, 'data-value': derived.doubled }, children);
}
export default Component38934;
