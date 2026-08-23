import React from 'react';
const LABEL_46479 = 'component_46479';
export function Component46479({ value = 46479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46479, 'data-value': derived.doubled }, children);
}
export default Component46479;
