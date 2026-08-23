import React from 'react';
const LABEL_11355 = 'component_11355';
export function Component11355({ value = 11355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11355, 'data-value': derived.doubled }, children);
}
export default Component11355;
