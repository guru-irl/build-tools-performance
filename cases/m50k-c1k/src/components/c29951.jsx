import React from 'react';
const LABEL_29951 = 'component_29951';
export function Component29951({ value = 29951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29951, 'data-value': derived.doubled }, children);
}
export default Component29951;
