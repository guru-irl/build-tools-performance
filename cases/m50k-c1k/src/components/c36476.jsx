import React from 'react';
const LABEL_36476 = 'component_36476';
export function Component36476({ value = 36476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36476, 'data-value': derived.doubled }, children);
}
export default Component36476;
