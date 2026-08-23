import React from 'react';
const LABEL_28493 = 'component_28493';
export function Component28493({ value = 28493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28493, 'data-value': derived.doubled }, children);
}
export default Component28493;
