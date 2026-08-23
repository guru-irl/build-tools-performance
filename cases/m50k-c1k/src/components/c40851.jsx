import React from 'react';
const LABEL_40851 = 'component_40851';
export function Component40851({ value = 40851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40851, 'data-value': derived.doubled }, children);
}
export default Component40851;
