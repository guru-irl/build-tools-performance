import React from 'react';
const LABEL_31879 = 'component_31879';
export function Component31879({ value = 31879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31879, 'data-value': derived.doubled }, children);
}
export default Component31879;
