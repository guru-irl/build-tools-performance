import React from 'react';
const LABEL_23357 = 'component_23357';
export function Component23357({ value = 23357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23357, 'data-value': derived.doubled }, children);
}
export default Component23357;
