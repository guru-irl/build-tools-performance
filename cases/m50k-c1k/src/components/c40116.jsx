import React from 'react';
const LABEL_40116 = 'component_40116';
export function Component40116({ value = 40116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40116, 'data-value': derived.doubled }, children);
}
export default Component40116;
