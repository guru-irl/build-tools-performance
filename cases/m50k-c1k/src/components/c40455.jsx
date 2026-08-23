import React from 'react';
const LABEL_40455 = 'component_40455';
export function Component40455({ value = 40455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40455, 'data-value': derived.doubled }, children);
}
export default Component40455;
