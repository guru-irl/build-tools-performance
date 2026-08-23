import React from 'react';
const LABEL_29969 = 'component_29969';
export function Component29969({ value = 29969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29969, 'data-value': derived.doubled }, children);
}
export default Component29969;
