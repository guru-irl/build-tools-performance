import React from 'react';
const LABEL_7659 = 'component_7659';
export function Component7659({ value = 7659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7659, 'data-value': derived.doubled }, children);
}
export default Component7659;
