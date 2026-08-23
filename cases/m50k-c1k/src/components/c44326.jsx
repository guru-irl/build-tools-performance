import React from 'react';
const LABEL_44326 = 'component_44326';
export function Component44326({ value = 44326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44326, 'data-value': derived.doubled }, children);
}
export default Component44326;
