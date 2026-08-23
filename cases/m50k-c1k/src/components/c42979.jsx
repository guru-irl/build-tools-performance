import React from 'react';
const LABEL_42979 = 'component_42979';
export function Component42979({ value = 42979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42979, 'data-value': derived.doubled }, children);
}
export default Component42979;
