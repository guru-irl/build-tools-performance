import React from 'react';
const LABEL_15704 = 'component_15704';
export function Component15704({ value = 15704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15704, 'data-value': derived.doubled }, children);
}
export default Component15704;
