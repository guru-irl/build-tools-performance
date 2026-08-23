import React from 'react';
const LABEL_30781 = 'component_30781';
export function Component30781({ value = 30781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30781, 'data-value': derived.doubled }, children);
}
export default Component30781;
