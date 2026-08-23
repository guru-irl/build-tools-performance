import React from 'react';
const LABEL_42649 = 'component_42649';
export function Component42649({ value = 42649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42649, 'data-value': derived.doubled }, children);
}
export default Component42649;
