import React from 'react';
const LABEL_1089 = 'component_1089';
export function Component1089({ value = 1089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1089, 'data-value': derived.doubled }, children);
}
export default Component1089;
