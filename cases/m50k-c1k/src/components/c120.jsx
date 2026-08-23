import React from 'react';
const LABEL_120 = 'component_120';
export function Component120({ value = 120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_120, 'data-value': derived.doubled }, children);
}
export default Component120;
