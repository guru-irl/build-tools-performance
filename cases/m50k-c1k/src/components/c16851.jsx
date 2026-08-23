import React from 'react';
const LABEL_16851 = 'component_16851';
export function Component16851({ value = 16851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16851, 'data-value': derived.doubled }, children);
}
export default Component16851;
