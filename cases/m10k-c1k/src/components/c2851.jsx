import React from 'react';
const LABEL_2851 = 'component_2851';
export function Component2851({ value = 2851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2851, 'data-value': derived.doubled }, children);
}
export default Component2851;
