import React from 'react';
const LABEL_20076 = 'component_20076';
export function Component20076({ value = 20076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20076, 'data-value': derived.doubled }, children);
}
export default Component20076;
