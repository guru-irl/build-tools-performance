import React from 'react';
const LABEL_7916 = 'component_7916';
export function Component7916({ value = 7916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7916, 'data-value': derived.doubled }, children);
}
export default Component7916;
