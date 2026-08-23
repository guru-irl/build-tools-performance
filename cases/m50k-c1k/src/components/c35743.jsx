import React from 'react';
const LABEL_35743 = 'component_35743';
export function Component35743({ value = 35743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35743, 'data-value': derived.doubled }, children);
}
export default Component35743;
