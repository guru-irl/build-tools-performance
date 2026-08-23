import React from 'react';
const LABEL_11895 = 'component_11895';
export function Component11895({ value = 11895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11895, 'data-value': derived.doubled }, children);
}
export default Component11895;
