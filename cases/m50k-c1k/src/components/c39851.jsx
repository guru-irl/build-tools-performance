import React from 'react';
const LABEL_39851 = 'component_39851';
export function Component39851({ value = 39851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39851, 'data-value': derived.doubled }, children);
}
export default Component39851;
