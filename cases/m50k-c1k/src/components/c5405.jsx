import React from 'react';
const LABEL_5405 = 'component_5405';
export function Component5405({ value = 5405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5405, 'data-value': derived.doubled }, children);
}
export default Component5405;
