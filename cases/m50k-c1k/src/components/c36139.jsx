import React from 'react';
const LABEL_36139 = 'component_36139';
export function Component36139({ value = 36139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36139, 'data-value': derived.doubled }, children);
}
export default Component36139;
