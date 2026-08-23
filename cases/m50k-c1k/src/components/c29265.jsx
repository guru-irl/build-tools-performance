import React from 'react';
const LABEL_29265 = 'component_29265';
export function Component29265({ value = 29265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29265, 'data-value': derived.doubled }, children);
}
export default Component29265;
