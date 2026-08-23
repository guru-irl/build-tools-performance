import React from 'react';
const LABEL_29171 = 'component_29171';
export function Component29171({ value = 29171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29171, 'data-value': derived.doubled }, children);
}
export default Component29171;
