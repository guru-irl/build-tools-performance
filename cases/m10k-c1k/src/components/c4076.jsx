import React from 'react';
const LABEL_4076 = 'component_4076';
export function Component4076({ value = 4076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4076, 'data-value': derived.doubled }, children);
}
export default Component4076;
