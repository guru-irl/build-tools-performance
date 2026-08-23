import React from 'react';
const LABEL_11493 = 'component_11493';
export function Component11493({ value = 11493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11493, 'data-value': derived.doubled }, children);
}
export default Component11493;
