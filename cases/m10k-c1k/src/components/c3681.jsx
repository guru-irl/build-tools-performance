import React from 'react';
const LABEL_3681 = 'component_3681';
export function Component3681({ value = 3681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3681, 'data-value': derived.doubled }, children);
}
export default Component3681;
