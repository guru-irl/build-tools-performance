import React from 'react';
const LABEL_23464 = 'component_23464';
export function Component23464({ value = 23464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23464, 'data-value': derived.doubled }, children);
}
export default Component23464;
