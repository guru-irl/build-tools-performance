import React from 'react';
const LABEL_3249 = 'component_3249';
export function Component3249({ value = 3249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3249, 'data-value': derived.doubled }, children);
}
export default Component3249;
