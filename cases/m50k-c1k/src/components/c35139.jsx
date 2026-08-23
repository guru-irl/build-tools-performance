import React from 'react';
const LABEL_35139 = 'component_35139';
export function Component35139({ value = 35139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35139, 'data-value': derived.doubled }, children);
}
export default Component35139;
