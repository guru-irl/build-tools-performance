import React from 'react';
const LABEL_44705 = 'component_44705';
export function Component44705({ value = 44705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44705, 'data-value': derived.doubled }, children);
}
export default Component44705;
