import React from 'react';
const LABEL_36468 = 'component_36468';
export function Component36468({ value = 36468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36468, 'data-value': derived.doubled }, children);
}
export default Component36468;
