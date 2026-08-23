import React from 'react';
const LABEL_25126 = 'component_25126';
export function Component25126({ value = 25126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25126, 'data-value': derived.doubled }, children);
}
export default Component25126;
