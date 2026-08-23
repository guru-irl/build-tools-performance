import React from 'react';
const LABEL_879 = 'component_879';
export function Component879({ value = 879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_879, 'data-value': derived.doubled }, children);
}
export default Component879;
