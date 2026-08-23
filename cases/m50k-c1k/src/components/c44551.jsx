import React from 'react';
const LABEL_44551 = 'component_44551';
export function Component44551({ value = 44551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44551, 'data-value': derived.doubled }, children);
}
export default Component44551;
