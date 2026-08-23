import React from 'react';
const LABEL_29858 = 'component_29858';
export function Component29858({ value = 29858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29858, 'data-value': derived.doubled }, children);
}
export default Component29858;
