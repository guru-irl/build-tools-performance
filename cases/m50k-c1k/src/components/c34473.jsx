import React from 'react';
const LABEL_34473 = 'component_34473';
export function Component34473({ value = 34473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34473, 'data-value': derived.doubled }, children);
}
export default Component34473;
