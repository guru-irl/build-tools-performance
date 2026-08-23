import React from 'react';
const LABEL_23183 = 'component_23183';
export function Component23183({ value = 23183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23183, 'data-value': derived.doubled }, children);
}
export default Component23183;
