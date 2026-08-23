import React from 'react';
const LABEL_46776 = 'component_46776';
export function Component46776({ value = 46776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46776, 'data-value': derived.doubled }, children);
}
export default Component46776;
