import React from 'react';
const LABEL_28473 = 'component_28473';
export function Component28473({ value = 28473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28473, 'data-value': derived.doubled }, children);
}
export default Component28473;
