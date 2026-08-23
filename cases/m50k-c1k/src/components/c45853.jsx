import React from 'react';
const LABEL_45853 = 'component_45853';
export function Component45853({ value = 45853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45853, 'data-value': derived.doubled }, children);
}
export default Component45853;
