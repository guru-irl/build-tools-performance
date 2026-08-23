import React from 'react';
const LABEL_8851 = 'component_8851';
export function Component8851({ value = 8851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8851, 'data-value': derived.doubled }, children);
}
export default Component8851;
