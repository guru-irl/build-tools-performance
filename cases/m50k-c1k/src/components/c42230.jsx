import React from 'react';
const LABEL_42230 = 'component_42230';
export function Component42230({ value = 42230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42230, 'data-value': derived.doubled }, children);
}
export default Component42230;
