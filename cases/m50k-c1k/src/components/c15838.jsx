import React from 'react';
const LABEL_15838 = 'component_15838';
export function Component15838({ value = 15838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15838, 'data-value': derived.doubled }, children);
}
export default Component15838;
