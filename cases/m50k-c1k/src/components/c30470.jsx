import React from 'react';
const LABEL_30470 = 'component_30470';
export function Component30470({ value = 30470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30470, 'data-value': derived.doubled }, children);
}
export default Component30470;
