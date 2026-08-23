import React from 'react';
const LABEL_16712 = 'component_16712';
export function Component16712({ value = 16712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16712, 'data-value': derived.doubled }, children);
}
export default Component16712;
