import React from 'react';
const LABEL_23010 = 'component_23010';
export function Component23010({ value = 23010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23010, 'data-value': derived.doubled }, children);
}
export default Component23010;
