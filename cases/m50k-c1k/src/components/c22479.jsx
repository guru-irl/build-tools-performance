import React from 'react';
const LABEL_22479 = 'component_22479';
export function Component22479({ value = 22479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22479, 'data-value': derived.doubled }, children);
}
export default Component22479;
