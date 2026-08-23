import React from 'react';
const LABEL_23879 = 'component_23879';
export function Component23879({ value = 23879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23879, 'data-value': derived.doubled }, children);
}
export default Component23879;
