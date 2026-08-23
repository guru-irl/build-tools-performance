import React from 'react';
const LABEL_28913 = 'component_28913';
export function Component28913({ value = 28913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28913, 'data-value': derived.doubled }, children);
}
export default Component28913;
