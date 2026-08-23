import React from 'react';
const LABEL_45556 = 'component_45556';
export function Component45556({ value = 45556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45556, 'data-value': derived.doubled }, children);
}
export default Component45556;
