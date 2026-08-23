import React from 'react';
const LABEL_38888 = 'component_38888';
export function Component38888({ value = 38888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38888, 'data-value': derived.doubled }, children);
}
export default Component38888;
