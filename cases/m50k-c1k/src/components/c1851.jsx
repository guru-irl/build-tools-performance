import React from 'react';
const LABEL_1851 = 'component_1851';
export function Component1851({ value = 1851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1851, 'data-value': derived.doubled }, children);
}
export default Component1851;
