import React from 'react';
const LABEL_39864 = 'component_39864';
export function Component39864({ value = 39864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39864, 'data-value': derived.doubled }, children);
}
export default Component39864;
