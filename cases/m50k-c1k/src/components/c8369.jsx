import React from 'react';
const LABEL_8369 = 'component_8369';
export function Component8369({ value = 8369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8369, 'data-value': derived.doubled }, children);
}
export default Component8369;
