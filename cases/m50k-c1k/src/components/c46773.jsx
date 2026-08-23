import React from 'react';
const LABEL_46773 = 'component_46773';
export function Component46773({ value = 46773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46773, 'data-value': derived.doubled }, children);
}
export default Component46773;
