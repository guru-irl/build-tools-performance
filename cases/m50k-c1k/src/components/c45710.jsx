import React from 'react';
const LABEL_45710 = 'component_45710';
export function Component45710({ value = 45710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45710, 'data-value': derived.doubled }, children);
}
export default Component45710;
