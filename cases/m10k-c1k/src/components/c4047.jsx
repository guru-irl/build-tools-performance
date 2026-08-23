import React from 'react';
const LABEL_4047 = 'component_4047';
export function Component4047({ value = 4047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4047, 'data-value': derived.doubled }, children);
}
export default Component4047;
