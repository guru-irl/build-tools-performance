import React from 'react';
const LABEL_19776 = 'component_19776';
export function Component19776({ value = 19776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19776, 'data-value': derived.doubled }, children);
}
export default Component19776;
