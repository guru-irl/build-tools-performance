import React from 'react';
const LABEL_25321 = 'component_25321';
export function Component25321({ value = 25321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25321, 'data-value': derived.doubled }, children);
}
export default Component25321;
