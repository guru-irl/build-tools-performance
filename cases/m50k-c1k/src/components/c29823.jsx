import React from 'react';
const LABEL_29823 = 'component_29823';
export function Component29823({ value = 29823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29823, 'data-value': derived.doubled }, children);
}
export default Component29823;
