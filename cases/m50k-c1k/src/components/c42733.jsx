import React from 'react';
const LABEL_42733 = 'component_42733';
export function Component42733({ value = 42733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42733, 'data-value': derived.doubled }, children);
}
export default Component42733;
