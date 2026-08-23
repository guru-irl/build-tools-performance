import React from 'react';
const LABEL_11566 = 'component_11566';
export function Component11566({ value = 11566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11566, 'data-value': derived.doubled }, children);
}
export default Component11566;
