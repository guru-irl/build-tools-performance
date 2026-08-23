import React from 'react';
const LABEL_34609 = 'component_34609';
export function Component34609({ value = 34609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34609, 'data-value': derived.doubled }, children);
}
export default Component34609;
