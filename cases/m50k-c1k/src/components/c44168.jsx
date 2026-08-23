import React from 'react';
const LABEL_44168 = 'component_44168';
export function Component44168({ value = 44168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44168, 'data-value': derived.doubled }, children);
}
export default Component44168;
