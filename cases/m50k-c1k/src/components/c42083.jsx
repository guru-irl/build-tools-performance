import React from 'react';
const LABEL_42083 = 'component_42083';
export function Component42083({ value = 42083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42083, 'data-value': derived.doubled }, children);
}
export default Component42083;
