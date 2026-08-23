import React from 'react';
const LABEL_22626 = 'component_22626';
export function Component22626({ value = 22626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22626, 'data-value': derived.doubled }, children);
}
export default Component22626;
