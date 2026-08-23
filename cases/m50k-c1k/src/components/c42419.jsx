import React from 'react';
const LABEL_42419 = 'component_42419';
export function Component42419({ value = 42419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42419, 'data-value': derived.doubled }, children);
}
export default Component42419;
