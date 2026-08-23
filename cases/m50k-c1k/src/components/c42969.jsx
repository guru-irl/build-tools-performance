import React from 'react';
const LABEL_42969 = 'component_42969';
export function Component42969({ value = 42969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42969, 'data-value': derived.doubled }, children);
}
export default Component42969;
