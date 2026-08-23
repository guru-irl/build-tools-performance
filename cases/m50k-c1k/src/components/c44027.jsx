import React from 'react';
const LABEL_44027 = 'component_44027';
export function Component44027({ value = 44027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44027, 'data-value': derived.doubled }, children);
}
export default Component44027;
