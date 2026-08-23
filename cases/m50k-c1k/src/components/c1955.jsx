import React from 'react';
const LABEL_1955 = 'component_1955';
export function Component1955({ value = 1955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1955, 'data-value': derived.doubled }, children);
}
export default Component1955;
