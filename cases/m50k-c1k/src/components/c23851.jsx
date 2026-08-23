import React from 'react';
const LABEL_23851 = 'component_23851';
export function Component23851({ value = 23851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23851, 'data-value': derived.doubled }, children);
}
export default Component23851;
