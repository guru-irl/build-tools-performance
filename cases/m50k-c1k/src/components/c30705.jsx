import React from 'react';
const LABEL_30705 = 'component_30705';
export function Component30705({ value = 30705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30705, 'data-value': derived.doubled }, children);
}
export default Component30705;
