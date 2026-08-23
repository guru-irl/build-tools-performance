import React from 'react';
const LABEL_6665 = 'component_6665';
export function Component6665({ value = 6665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6665, 'data-value': derived.doubled }, children);
}
export default Component6665;
