import React from 'react';
const LABEL_6464 = 'component_6464';
export function Component6464({ value = 6464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6464, 'data-value': derived.doubled }, children);
}
export default Component6464;
