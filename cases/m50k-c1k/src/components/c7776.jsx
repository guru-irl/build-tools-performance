import React from 'react';
const LABEL_7776 = 'component_7776';
export function Component7776({ value = 7776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7776, 'data-value': derived.doubled }, children);
}
export default Component7776;
