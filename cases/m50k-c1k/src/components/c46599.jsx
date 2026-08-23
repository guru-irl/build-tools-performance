import React from 'react';
const LABEL_46599 = 'component_46599';
export function Component46599({ value = 46599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46599, 'data-value': derived.doubled }, children);
}
export default Component46599;
