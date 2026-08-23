import React from 'react';
const LABEL_6851 = 'component_6851';
export function Component6851({ value = 6851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6851, 'data-value': derived.doubled }, children);
}
export default Component6851;
