import React from 'react';
const LABEL_33165 = 'component_33165';
export function Component33165({ value = 33165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33165, 'data-value': derived.doubled }, children);
}
export default Component33165;
