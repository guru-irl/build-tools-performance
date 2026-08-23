import React from 'react';
const LABEL_8891 = 'component_8891';
export function Component8891({ value = 8891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8891, 'data-value': derived.doubled }, children);
}
export default Component8891;
