import React from 'react';
const LABEL_34710 = 'component_34710';
export function Component34710({ value = 34710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34710, 'data-value': derived.doubled }, children);
}
export default Component34710;
