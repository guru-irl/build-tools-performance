import React from 'react';
const LABEL_40625 = 'component_40625';
export function Component40625({ value = 40625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40625, 'data-value': derived.doubled }, children);
}
export default Component40625;
