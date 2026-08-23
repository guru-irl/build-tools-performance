import React from 'react';
const LABEL_626 = 'component_626';
export function Component626({ value = 626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_626, 'data-value': derived.doubled }, children);
}
export default Component626;
