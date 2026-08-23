import React from 'react';
const LABEL_34712 = 'component_34712';
export function Component34712({ value = 34712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34712, 'data-value': derived.doubled }, children);
}
export default Component34712;
