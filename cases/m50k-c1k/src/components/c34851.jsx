import React from 'react';
const LABEL_34851 = 'component_34851';
export function Component34851({ value = 34851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34851, 'data-value': derived.doubled }, children);
}
export default Component34851;
