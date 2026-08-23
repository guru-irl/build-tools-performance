import React from 'react';
const LABEL_44399 = 'component_44399';
export function Component44399({ value = 44399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44399, 'data-value': derived.doubled }, children);
}
export default Component44399;
