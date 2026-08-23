import React from 'react';
const LABEL_29076 = 'component_29076';
export function Component29076({ value = 29076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29076, 'data-value': derived.doubled }, children);
}
export default Component29076;
