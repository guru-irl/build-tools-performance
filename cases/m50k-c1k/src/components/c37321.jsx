import React from 'react';
const LABEL_37321 = 'component_37321';
export function Component37321({ value = 37321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37321, 'data-value': derived.doubled }, children);
}
export default Component37321;
