import React from 'react';
const LABEL_14528 = 'component_14528';
export function Component14528({ value = 14528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14528, 'data-value': derived.doubled }, children);
}
export default Component14528;
