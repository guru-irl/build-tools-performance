import React from 'react';
const LABEL_36851 = 'component_36851';
export function Component36851({ value = 36851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36851, 'data-value': derived.doubled }, children);
}
export default Component36851;
