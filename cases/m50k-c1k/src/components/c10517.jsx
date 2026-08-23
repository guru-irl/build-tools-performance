import React from 'react';
const LABEL_10517 = 'component_10517';
export function Component10517({ value = 10517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10517, 'data-value': derived.doubled }, children);
}
export default Component10517;
