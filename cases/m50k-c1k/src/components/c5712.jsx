import React from 'react';
const LABEL_5712 = 'component_5712';
export function Component5712({ value = 5712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5712, 'data-value': derived.doubled }, children);
}
export default Component5712;
