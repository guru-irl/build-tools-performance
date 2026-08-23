import React from 'react';
const LABEL_6354 = 'component_6354';
export function Component6354({ value = 6354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6354, 'data-value': derived.doubled }, children);
}
export default Component6354;
