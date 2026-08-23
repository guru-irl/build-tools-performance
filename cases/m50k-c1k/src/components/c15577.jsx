import React from 'react';
const LABEL_15577 = 'component_15577';
export function Component15577({ value = 15577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15577, 'data-value': derived.doubled }, children);
}
export default Component15577;
