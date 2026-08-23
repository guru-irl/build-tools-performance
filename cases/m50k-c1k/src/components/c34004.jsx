import React from 'react';
const LABEL_34004 = 'component_34004';
export function Component34004({ value = 34004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34004, 'data-value': derived.doubled }, children);
}
export default Component34004;
