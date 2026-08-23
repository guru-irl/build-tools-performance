import React from 'react';
const LABEL_17851 = 'component_17851';
export function Component17851({ value = 17851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17851, 'data-value': derived.doubled }, children);
}
export default Component17851;
