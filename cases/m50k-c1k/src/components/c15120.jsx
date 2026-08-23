import React from 'react';
const LABEL_15120 = 'component_15120';
export function Component15120({ value = 15120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15120, 'data-value': derived.doubled }, children);
}
export default Component15120;
