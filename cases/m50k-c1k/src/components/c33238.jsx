import React from 'react';
const LABEL_33238 = 'component_33238';
export function Component33238({ value = 33238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33238, 'data-value': derived.doubled }, children);
}
export default Component33238;
