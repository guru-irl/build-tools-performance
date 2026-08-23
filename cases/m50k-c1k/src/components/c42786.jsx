import React from 'react';
const LABEL_42786 = 'component_42786';
export function Component42786({ value = 42786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42786, 'data-value': derived.doubled }, children);
}
export default Component42786;
