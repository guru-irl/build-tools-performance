import React from 'react';
const LABEL_42851 = 'component_42851';
export function Component42851({ value = 42851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42851, 'data-value': derived.doubled }, children);
}
export default Component42851;
