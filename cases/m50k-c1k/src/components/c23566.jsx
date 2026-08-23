import React from 'react';
const LABEL_23566 = 'component_23566';
export function Component23566({ value = 23566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23566, 'data-value': derived.doubled }, children);
}
export default Component23566;
