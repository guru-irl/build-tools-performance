import React from 'react';
const LABEL_29641 = 'component_29641';
export function Component29641({ value = 29641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29641, 'data-value': derived.doubled }, children);
}
export default Component29641;
