import React from 'react';
const LABEL_37776 = 'component_37776';
export function Component37776({ value = 37776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37776, 'data-value': derived.doubled }, children);
}
export default Component37776;
