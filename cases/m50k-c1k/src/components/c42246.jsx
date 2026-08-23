import React from 'react';
const LABEL_42246 = 'component_42246';
export function Component42246({ value = 42246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42246, 'data-value': derived.doubled }, children);
}
export default Component42246;
