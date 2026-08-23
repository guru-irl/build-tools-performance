import React from 'react';
const LABEL_46625 = 'component_46625';
export function Component46625({ value = 46625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46625, 'data-value': derived.doubled }, children);
}
export default Component46625;
