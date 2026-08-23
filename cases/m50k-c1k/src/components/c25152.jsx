import React from 'react';
const LABEL_25152 = 'component_25152';
export function Component25152({ value = 25152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25152, 'data-value': derived.doubled }, children);
}
export default Component25152;
