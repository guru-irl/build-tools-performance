import React from 'react';
const LABEL_42002 = 'component_42002';
export function Component42002({ value = 42002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42002, 'data-value': derived.doubled }, children);
}
export default Component42002;
