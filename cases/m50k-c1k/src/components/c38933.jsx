import React from 'react';
const LABEL_38933 = 'component_38933';
export function Component38933({ value = 38933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38933, 'data-value': derived.doubled }, children);
}
export default Component38933;
