import React from 'react';
const LABEL_40850 = 'component_40850';
export function Component40850({ value = 40850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40850, 'data-value': derived.doubled }, children);
}
export default Component40850;
