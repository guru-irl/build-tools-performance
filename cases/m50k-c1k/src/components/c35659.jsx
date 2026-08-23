import React from 'react';
const LABEL_35659 = 'component_35659';
export function Component35659({ value = 35659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35659, 'data-value': derived.doubled }, children);
}
export default Component35659;
