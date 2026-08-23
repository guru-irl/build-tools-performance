import React from 'react';
const LABEL_13464 = 'component_13464';
export function Component13464({ value = 13464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13464, 'data-value': derived.doubled }, children);
}
export default Component13464;
