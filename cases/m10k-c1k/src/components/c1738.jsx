import React from 'react';
const LABEL_1738 = 'component_1738';
export function Component1738({ value = 1738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1738, 'data-value': derived.doubled }, children);
}
export default Component1738;
