import React from 'react';
const LABEL_1464 = 'component_1464';
export function Component1464({ value = 1464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1464, 'data-value': derived.doubled }, children);
}
export default Component1464;
