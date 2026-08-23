import React from 'react';
const LABEL_40437 = 'component_40437';
export function Component40437({ value = 40437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40437, 'data-value': derived.doubled }, children);
}
export default Component40437;
