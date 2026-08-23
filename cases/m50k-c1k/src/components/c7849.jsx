import React from 'react';
const LABEL_7849 = 'component_7849';
export function Component7849({ value = 7849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7849, 'data-value': derived.doubled }, children);
}
export default Component7849;
