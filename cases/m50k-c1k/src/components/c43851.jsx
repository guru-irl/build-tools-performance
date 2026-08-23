import React from 'react';
const LABEL_43851 = 'component_43851';
export function Component43851({ value = 43851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43851, 'data-value': derived.doubled }, children);
}
export default Component43851;
