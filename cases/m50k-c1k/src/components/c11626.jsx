import React from 'react';
const LABEL_11626 = 'component_11626';
export function Component11626({ value = 11626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11626, 'data-value': derived.doubled }, children);
}
export default Component11626;
