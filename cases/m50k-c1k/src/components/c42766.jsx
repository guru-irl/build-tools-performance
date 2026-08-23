import React from 'react';
const LABEL_42766 = 'component_42766';
export function Component42766({ value = 42766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42766, 'data-value': derived.doubled }, children);
}
export default Component42766;
