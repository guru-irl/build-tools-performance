import React from 'react';
const LABEL_3738 = 'component_3738';
export function Component3738({ value = 3738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3738, 'data-value': derived.doubled }, children);
}
export default Component3738;
