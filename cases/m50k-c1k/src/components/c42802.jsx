import React from 'react';
const LABEL_42802 = 'component_42802';
export function Component42802({ value = 42802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42802, 'data-value': derived.doubled }, children);
}
export default Component42802;
