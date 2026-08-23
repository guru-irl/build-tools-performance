import React from 'react';
const LABEL_6634 = 'component_6634';
export function Component6634({ value = 6634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6634, 'data-value': derived.doubled }, children);
}
export default Component6634;
