import React from 'react';
const LABEL_40076 = 'component_40076';
export function Component40076({ value = 40076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40076, 'data-value': derived.doubled }, children);
}
export default Component40076;
