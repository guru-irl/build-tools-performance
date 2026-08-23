import React from 'react';
const LABEL_46851 = 'component_46851';
export function Component46851({ value = 46851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46851, 'data-value': derived.doubled }, children);
}
export default Component46851;
