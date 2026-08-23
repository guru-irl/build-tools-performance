import React from 'react';
const LABEL_147 = 'component_147';
export function Component147({ value = 147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_147, 'data-value': derived.doubled }, children);
}
export default Component147;
