import React from 'react';
const LABEL_30541 = 'component_30541';
export function Component30541({ value = 30541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30541, 'data-value': derived.doubled }, children);
}
export default Component30541;
