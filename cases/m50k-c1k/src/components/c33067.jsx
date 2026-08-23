import React from 'react';
const LABEL_33067 = 'component_33067';
export function Component33067({ value = 33067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33067, 'data-value': derived.doubled }, children);
}
export default Component33067;
