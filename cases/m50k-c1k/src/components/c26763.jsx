import React from 'react';
const LABEL_26763 = 'component_26763';
export function Component26763({ value = 26763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26763, 'data-value': derived.doubled }, children);
}
export default Component26763;
