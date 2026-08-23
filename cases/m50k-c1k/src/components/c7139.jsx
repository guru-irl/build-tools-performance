import React from 'react';
const LABEL_7139 = 'component_7139';
export function Component7139({ value = 7139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7139, 'data-value': derived.doubled }, children);
}
export default Component7139;
