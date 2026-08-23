import React from 'react';
const LABEL_19047 = 'component_19047';
export function Component19047({ value = 19047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19047, 'data-value': derived.doubled }, children);
}
export default Component19047;
