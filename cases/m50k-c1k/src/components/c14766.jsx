import React from 'react';
const LABEL_14766 = 'component_14766';
export function Component14766({ value = 14766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14766, 'data-value': derived.doubled }, children);
}
export default Component14766;
