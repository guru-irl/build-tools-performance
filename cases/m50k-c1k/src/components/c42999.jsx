import React from 'react';
const LABEL_42999 = 'component_42999';
export function Component42999({ value = 42999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42999, 'data-value': derived.doubled }, children);
}
export default Component42999;
