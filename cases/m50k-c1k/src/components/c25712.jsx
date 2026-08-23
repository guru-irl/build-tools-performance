import React from 'react';
const LABEL_25712 = 'component_25712';
export function Component25712({ value = 25712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25712, 'data-value': derived.doubled }, children);
}
export default Component25712;
