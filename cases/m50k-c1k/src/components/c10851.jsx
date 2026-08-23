import React from 'react';
const LABEL_10851 = 'component_10851';
export function Component10851({ value = 10851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10851, 'data-value': derived.doubled }, children);
}
export default Component10851;
