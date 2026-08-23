import React from 'react';
const LABEL_38851 = 'component_38851';
export function Component38851({ value = 38851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38851, 'data-value': derived.doubled }, children);
}
export default Component38851;
