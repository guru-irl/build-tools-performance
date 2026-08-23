import React from 'react';
const LABEL_25895 = 'component_25895';
export function Component25895({ value = 25895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25895, 'data-value': derived.doubled }, children);
}
export default Component25895;
