import React from 'react';
const LABEL_44369 = 'component_44369';
export function Component44369({ value = 44369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44369, 'data-value': derived.doubled }, children);
}
export default Component44369;
