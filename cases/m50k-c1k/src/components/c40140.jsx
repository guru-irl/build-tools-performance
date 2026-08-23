import React from 'react';
const LABEL_40140 = 'component_40140';
export function Component40140({ value = 40140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40140, 'data-value': derived.doubled }, children);
}
export default Component40140;
