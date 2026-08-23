import React from 'react';
const LABEL_40734 = 'component_40734';
export function Component40734({ value = 40734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40734, 'data-value': derived.doubled }, children);
}
export default Component40734;
