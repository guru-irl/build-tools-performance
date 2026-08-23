import React from 'react';
const LABEL_25691 = 'component_25691';
export function Component25691({ value = 25691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25691, 'data-value': derived.doubled }, children);
}
export default Component25691;
