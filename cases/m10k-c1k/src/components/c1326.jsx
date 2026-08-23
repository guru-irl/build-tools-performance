import React from 'react';
const LABEL_1326 = 'component_1326';
export function Component1326({ value = 1326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1326, 'data-value': derived.doubled }, children);
}
export default Component1326;
