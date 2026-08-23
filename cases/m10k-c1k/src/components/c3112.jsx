import React from 'react';
const LABEL_3112 = 'component_3112';
export function Component3112({ value = 3112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3112, 'data-value': derived.doubled }, children);
}
export default Component3112;
