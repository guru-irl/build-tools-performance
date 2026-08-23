import React from 'react';
const LABEL_23890 = 'component_23890';
export function Component23890({ value = 23890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23890, 'data-value': derived.doubled }, children);
}
export default Component23890;
