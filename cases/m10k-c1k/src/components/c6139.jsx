import React from 'react';
const LABEL_6139 = 'component_6139';
export function Component6139({ value = 6139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6139, 'data-value': derived.doubled }, children);
}
export default Component6139;
