import React from 'react';
const LABEL_34731 = 'component_34731';
export function Component34731({ value = 34731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34731, 'data-value': derived.doubled }, children);
}
export default Component34731;
