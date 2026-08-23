import React from 'react';
const LABEL_13851 = 'component_13851';
export function Component13851({ value = 13851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13851, 'data-value': derived.doubled }, children);
}
export default Component13851;
