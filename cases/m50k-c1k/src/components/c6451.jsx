import React from 'react';
const LABEL_6451 = 'component_6451';
export function Component6451({ value = 6451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6451, 'data-value': derived.doubled }, children);
}
export default Component6451;
