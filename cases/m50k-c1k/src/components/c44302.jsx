import React from 'react';
const LABEL_44302 = 'component_44302';
export function Component44302({ value = 44302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44302, 'data-value': derived.doubled }, children);
}
export default Component44302;
