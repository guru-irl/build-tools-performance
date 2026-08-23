import React from 'react';
const LABEL_34475 = 'component_34475';
export function Component34475({ value = 34475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34475, 'data-value': derived.doubled }, children);
}
export default Component34475;
