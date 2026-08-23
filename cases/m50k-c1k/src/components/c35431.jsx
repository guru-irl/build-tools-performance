import React from 'react';
const LABEL_35431 = 'component_35431';
export function Component35431({ value = 35431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35431, 'data-value': derived.doubled }, children);
}
export default Component35431;
