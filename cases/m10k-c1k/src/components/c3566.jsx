import React from 'react';
const LABEL_3566 = 'component_3566';
export function Component3566({ value = 3566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3566, 'data-value': derived.doubled }, children);
}
export default Component3566;
