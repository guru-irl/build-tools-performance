import React from 'react';
const LABEL_38794 = 'component_38794';
export function Component38794({ value = 38794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38794, 'data-value': derived.doubled }, children);
}
export default Component38794;
