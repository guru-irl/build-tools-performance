import React from 'react';
const LABEL_44222 = 'component_44222';
export function Component44222({ value = 44222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44222, 'data-value': derived.doubled }, children);
}
export default Component44222;
