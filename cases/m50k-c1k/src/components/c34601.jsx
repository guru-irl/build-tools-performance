import React from 'react';
const LABEL_34601 = 'component_34601';
export function Component34601({ value = 34601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34601, 'data-value': derived.doubled }, children);
}
export default Component34601;
