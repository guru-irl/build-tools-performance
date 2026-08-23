import React from 'react';
const LABEL_38475 = 'component_38475';
export function Component38475({ value = 38475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38475, 'data-value': derived.doubled }, children);
}
export default Component38475;
