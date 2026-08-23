import React from 'react';
const LABEL_42995 = 'component_42995';
export function Component42995({ value = 42995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42995, 'data-value': derived.doubled }, children);
}
export default Component42995;
