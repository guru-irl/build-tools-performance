import React from 'react';
const LABEL_15689 = 'component_15689';
export function Component15689({ value = 15689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15689, 'data-value': derived.doubled }, children);
}
export default Component15689;
