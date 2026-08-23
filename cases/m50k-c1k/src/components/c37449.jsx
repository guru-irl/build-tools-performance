import React from 'react';
const LABEL_37449 = 'component_37449';
export function Component37449({ value = 37449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37449, 'data-value': derived.doubled }, children);
}
export default Component37449;
