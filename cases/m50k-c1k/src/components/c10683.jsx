import React from 'react';
const LABEL_10683 = 'component_10683';
export function Component10683({ value = 10683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10683, 'data-value': derived.doubled }, children);
}
export default Component10683;
