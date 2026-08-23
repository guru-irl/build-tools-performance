import React from 'react';
const LABEL_6625 = 'component_6625';
export function Component6625({ value = 6625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6625, 'data-value': derived.doubled }, children);
}
export default Component6625;
