import React from 'react';
const LABEL_25851 = 'component_25851';
export function Component25851({ value = 25851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25851, 'data-value': derived.doubled }, children);
}
export default Component25851;
