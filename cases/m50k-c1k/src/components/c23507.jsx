import React from 'react';
const LABEL_23507 = 'component_23507';
export function Component23507({ value = 23507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23507, 'data-value': derived.doubled }, children);
}
export default Component23507;
