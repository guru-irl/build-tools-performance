import React from 'react';
const LABEL_33219 = 'component_33219';
export function Component33219({ value = 33219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33219, 'data-value': derived.doubled }, children);
}
export default Component33219;
