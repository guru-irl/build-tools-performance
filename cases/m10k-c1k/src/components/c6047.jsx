import React from 'react';
const LABEL_6047 = 'component_6047';
export function Component6047({ value = 6047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6047, 'data-value': derived.doubled }, children);
}
export default Component6047;
