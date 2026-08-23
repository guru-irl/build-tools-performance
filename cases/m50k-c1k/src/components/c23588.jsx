import React from 'react';
const LABEL_23588 = 'component_23588';
export function Component23588({ value = 23588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23588, 'data-value': derived.doubled }, children);
}
export default Component23588;
