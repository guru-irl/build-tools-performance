import React from 'react';
const LABEL_29017 = 'component_29017';
export function Component29017({ value = 29017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29017, 'data-value': derived.doubled }, children);
}
export default Component29017;
