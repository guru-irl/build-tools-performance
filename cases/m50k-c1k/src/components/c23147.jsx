import React from 'react';
const LABEL_23147 = 'component_23147';
export function Component23147({ value = 23147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23147, 'data-value': derived.doubled }, children);
}
export default Component23147;
