import React from 'react';
const LABEL_26772 = 'component_26772';
export function Component26772({ value = 26772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26772, 'data-value': derived.doubled }, children);
}
export default Component26772;
