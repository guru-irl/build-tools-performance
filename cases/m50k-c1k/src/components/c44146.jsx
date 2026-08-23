import React from 'react';
const LABEL_44146 = 'component_44146';
export function Component44146({ value = 44146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44146, 'data-value': derived.doubled }, children);
}
export default Component44146;
