import React from 'react';
const LABEL_4369 = 'component_4369';
export function Component4369({ value = 4369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4369, 'data-value': derived.doubled }, children);
}
export default Component4369;
