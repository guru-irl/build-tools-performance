import React from 'react';
const LABEL_44829 = 'component_44829';
export function Component44829({ value = 44829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44829, 'data-value': derived.doubled }, children);
}
export default Component44829;
