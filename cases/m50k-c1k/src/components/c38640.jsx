import React from 'react';
const LABEL_38640 = 'component_38640';
export function Component38640({ value = 38640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38640, 'data-value': derived.doubled }, children);
}
export default Component38640;
