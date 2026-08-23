import React from 'react';
const LABEL_24776 = 'component_24776';
export function Component24776({ value = 24776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24776, 'data-value': derived.doubled }, children);
}
export default Component24776;
