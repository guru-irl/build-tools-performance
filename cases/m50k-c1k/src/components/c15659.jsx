import React from 'react';
const LABEL_15659 = 'component_15659';
export function Component15659({ value = 15659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15659, 'data-value': derived.doubled }, children);
}
export default Component15659;
