import React from 'react';
const LABEL_38265 = 'component_38265';
export function Component38265({ value = 38265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38265, 'data-value': derived.doubled }, children);
}
export default Component38265;
