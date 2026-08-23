import React from 'react';
const LABEL_37851 = 'component_37851';
export function Component37851({ value = 37851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37851, 'data-value': derived.doubled }, children);
}
export default Component37851;
