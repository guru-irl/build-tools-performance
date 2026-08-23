import React from 'react';
const LABEL_29217 = 'component_29217';
export function Component29217({ value = 29217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29217, 'data-value': derived.doubled }, children);
}
export default Component29217;
