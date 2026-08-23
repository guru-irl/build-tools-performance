import React from 'react';
const LABEL_40660 = 'component_40660';
export function Component40660({ value = 40660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40660, 'data-value': derived.doubled }, children);
}
export default Component40660;
