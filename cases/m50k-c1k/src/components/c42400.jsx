import React from 'react';
const LABEL_42400 = 'component_42400';
export function Component42400({ value = 42400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42400, 'data-value': derived.doubled }, children);
}
export default Component42400;
