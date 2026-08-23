import React from 'react';
const LABEL_26831 = 'component_26831';
export function Component26831({ value = 26831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26831, 'data-value': derived.doubled }, children);
}
export default Component26831;
