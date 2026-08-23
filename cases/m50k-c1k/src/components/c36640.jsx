import React from 'react';
const LABEL_36640 = 'component_36640';
export function Component36640({ value = 36640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36640, 'data-value': derived.doubled }, children);
}
export default Component36640;
