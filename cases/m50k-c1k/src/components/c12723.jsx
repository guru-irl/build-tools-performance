import React from 'react';
const LABEL_12723 = 'component_12723';
export function Component12723({ value = 12723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12723, 'data-value': derived.doubled }, children);
}
export default Component12723;
