import React from 'react';
const LABEL_18473 = 'component_18473';
export function Component18473({ value = 18473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18473, 'data-value': derived.doubled }, children);
}
export default Component18473;
