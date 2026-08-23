import React from 'react';
const LABEL_23723 = 'component_23723';
export function Component23723({ value = 23723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23723, 'data-value': derived.doubled }, children);
}
export default Component23723;
