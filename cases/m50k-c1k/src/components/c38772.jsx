import React from 'react';
const LABEL_38772 = 'component_38772';
export function Component38772({ value = 38772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38772, 'data-value': derived.doubled }, children);
}
export default Component38772;
