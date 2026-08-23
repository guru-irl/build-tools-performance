import React from 'react';
const LABEL_45076 = 'component_45076';
export function Component45076({ value = 45076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45076, 'data-value': derived.doubled }, children);
}
export default Component45076;
