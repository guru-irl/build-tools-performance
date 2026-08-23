import React from 'react';
const LABEL_46374 = 'component_46374';
export function Component46374({ value = 46374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46374, 'data-value': derived.doubled }, children);
}
export default Component46374;
