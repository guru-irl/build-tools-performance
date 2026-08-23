import React from 'react';
const LABEL_42487 = 'component_42487';
export function Component42487({ value = 42487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42487, 'data-value': derived.doubled }, children);
}
export default Component42487;
