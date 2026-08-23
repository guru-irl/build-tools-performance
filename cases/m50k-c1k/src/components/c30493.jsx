import React from 'react';
const LABEL_30493 = 'component_30493';
export function Component30493({ value = 30493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30493, 'data-value': derived.doubled }, children);
}
export default Component30493;
