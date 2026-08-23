import React from 'react';
const LABEL_37718 = 'component_37718';
export function Component37718({ value = 37718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37718, 'data-value': derived.doubled }, children);
}
export default Component37718;
