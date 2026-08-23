import React from 'react';
const LABEL_41321 = 'component_41321';
export function Component41321({ value = 41321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41321, 'data-value': derived.doubled }, children);
}
export default Component41321;
