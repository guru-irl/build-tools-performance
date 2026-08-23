import React from 'react';
const LABEL_30473 = 'component_30473';
export function Component30473({ value = 30473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30473, 'data-value': derived.doubled }, children);
}
export default Component30473;
