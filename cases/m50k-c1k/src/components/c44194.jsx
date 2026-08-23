import React from 'react';
const LABEL_44194 = 'component_44194';
export function Component44194({ value = 44194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44194, 'data-value': derived.doubled }, children);
}
export default Component44194;
