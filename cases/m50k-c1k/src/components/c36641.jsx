import React from 'react';
const LABEL_36641 = 'component_36641';
export function Component36641({ value = 36641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36641, 'data-value': derived.doubled }, children);
}
export default Component36641;
