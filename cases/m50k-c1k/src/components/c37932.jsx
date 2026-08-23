import React from 'react';
const LABEL_37932 = 'component_37932';
export function Component37932({ value = 37932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37932, 'data-value': derived.doubled }, children);
}
export default Component37932;
