import React from 'react';
const LABEL_3686 = 'component_3686';
export function Component3686({ value = 3686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3686, 'data-value': derived.doubled }, children);
}
export default Component3686;
