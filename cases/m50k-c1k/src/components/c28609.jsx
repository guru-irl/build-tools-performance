import React from 'react';
const LABEL_28609 = 'component_28609';
export function Component28609({ value = 28609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28609, 'data-value': derived.doubled }, children);
}
export default Component28609;
