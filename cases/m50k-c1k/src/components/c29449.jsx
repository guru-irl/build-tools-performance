import React from 'react';
const LABEL_29449 = 'component_29449';
export function Component29449({ value = 29449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29449, 'data-value': derived.doubled }, children);
}
export default Component29449;
