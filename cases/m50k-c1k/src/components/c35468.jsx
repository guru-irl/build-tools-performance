import React from 'react';
const LABEL_35468 = 'component_35468';
export function Component35468({ value = 35468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35468, 'data-value': derived.doubled }, children);
}
export default Component35468;
