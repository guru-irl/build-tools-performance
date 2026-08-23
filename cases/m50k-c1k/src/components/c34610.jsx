import React from 'react';
const LABEL_34610 = 'component_34610';
export function Component34610({ value = 34610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34610, 'data-value': derived.doubled }, children);
}
export default Component34610;
