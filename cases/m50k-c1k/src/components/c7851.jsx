import React from 'react';
const LABEL_7851 = 'component_7851';
export function Component7851({ value = 7851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7851, 'data-value': derived.doubled }, children);
}
export default Component7851;
