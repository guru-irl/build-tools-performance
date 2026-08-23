import React from 'react';
const LABEL_38423 = 'component_38423';
export function Component38423({ value = 38423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38423, 'data-value': derived.doubled }, children);
}
export default Component38423;
