import React from 'react';
const LABEL_36920 = 'component_36920';
export function Component36920({ value = 36920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36920, 'data-value': derived.doubled }, children);
}
export default Component36920;
