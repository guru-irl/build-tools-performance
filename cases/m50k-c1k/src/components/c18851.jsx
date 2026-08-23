import React from 'react';
const LABEL_18851 = 'component_18851';
export function Component18851({ value = 18851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18851, 'data-value': derived.doubled }, children);
}
export default Component18851;
