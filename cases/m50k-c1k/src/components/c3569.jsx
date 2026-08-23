import React from 'react';
const LABEL_3569 = 'component_3569';
export function Component3569({ value = 3569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3569, 'data-value': derived.doubled }, children);
}
export default Component3569;
