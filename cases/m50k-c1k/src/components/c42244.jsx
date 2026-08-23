import React from 'react';
const LABEL_42244 = 'component_42244';
export function Component42244({ value = 42244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42244, 'data-value': derived.doubled }, children);
}
export default Component42244;
