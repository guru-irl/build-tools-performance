import React from 'react';
const LABEL_13566 = 'component_13566';
export function Component13566({ value = 13566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13566, 'data-value': derived.doubled }, children);
}
export default Component13566;
