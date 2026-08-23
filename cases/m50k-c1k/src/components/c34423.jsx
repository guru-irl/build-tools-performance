import React from 'react';
const LABEL_34423 = 'component_34423';
export function Component34423({ value = 34423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34423, 'data-value': derived.doubled }, children);
}
export default Component34423;
