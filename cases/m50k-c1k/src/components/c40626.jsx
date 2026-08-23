import React from 'react';
const LABEL_40626 = 'component_40626';
export function Component40626({ value = 40626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40626, 'data-value': derived.doubled }, children);
}
export default Component40626;
