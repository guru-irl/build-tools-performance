import React from 'react';
const LABEL_29053 = 'component_29053';
export function Component29053({ value = 29053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29053, 'data-value': derived.doubled }, children);
}
export default Component29053;
