import React from 'react';
const LABEL_7626 = 'component_7626';
export function Component7626({ value = 7626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7626, 'data-value': derived.doubled }, children);
}
export default Component7626;
