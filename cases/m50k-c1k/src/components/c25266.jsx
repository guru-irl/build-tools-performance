import React from 'react';
const LABEL_25266 = 'component_25266';
export function Component25266({ value = 25266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25266, 'data-value': derived.doubled }, children);
}
export default Component25266;
