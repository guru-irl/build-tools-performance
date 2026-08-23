import React from 'react';
const LABEL_15183 = 'component_15183';
export function Component15183({ value = 15183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15183, 'data-value': derived.doubled }, children);
}
export default Component15183;
