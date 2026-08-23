import React from 'react';
const LABEL_36895 = 'component_36895';
export function Component36895({ value = 36895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36895, 'data-value': derived.doubled }, children);
}
export default Component36895;
